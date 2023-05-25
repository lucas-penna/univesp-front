import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { debounceTime } from 'rxjs';
import { Produto } from 'src/app/shared/models/Produto';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { CadastrarProdutoComponent } from '../cadastrar/cadastrar-produto.component';

@Component({
  selector: 'app-consultar-produto',
  templateUrl: './consultar-produto.component.html',
  styleUrls: ['./consultar-produto.component.css']
})
export class ConsultarProdutoComponent implements OnInit {

  produtos!: Produto[];

  page: number = 1;

  first: number = 0;

  last: number = 9;

  rows: number = 10;

  totalRecords: number = 10;

  ref!: DynamicDialogRef;

  form!: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private messageService: MessageService,
    public dialogService: DialogService,
    public modalService: ModalService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.pesquisar();
  }

  initForm() {
    this.form = this.formBuilder.group({
      descricao: [null],
    })
    this.form.valueChanges
      .pipe(debounceTime(700))
      .subscribe(() => { this.pesquisar() });
  }

  pesquisar(event?: LazyLoadEvent) {
    if (event) {
      this.first = event.first!;
      this.rows = event.rows!;
    }
    this.page = (this.first / this.rows) + 1;
    this.produtoService.pesquisar(this.form.value, this.page, this.rows).subscribe({
      next: (success: any) => {
        this.produtos = success.content;
        this.totalRecords = success.totalElements;
        this.first = ((this.page - 1) * this.rows);
        this.last = (this.page * this.rows) - 1;
      },
      error: (err: any) => {
      }
    })
  }

  deletar(produto: Produto) {
    this.produtoService.delete(produto.id!).subscribe({
      complete: () => {
        this.messageService.add({ severity: 'success', detail: 'Produto deletado com sucesso', life: 3000 });
        this.pesquisar();
      },
      error: (err: any) => {
        this.messageService.add({ severity: 'error', detail: err.error });
      }
    })
  }

  editarProduto(produto: Produto) {
    this.modalService.entity = produto;
    this.modalService.ref = this.dialogService.open(CadastrarProdutoComponent, {
      header: 'Editar Produto',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.modalService.ref.onClose.subscribe(() => {
      this.pesquisar();
    });
  }

  deletarProduto(produto: Produto) {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir ' + produto.descricao + '?',
      header: ' ',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.deletar(produto);
      }
    });
  }

  showDialog() {
    this.modalService.ref = this.dialogService.open(CadastrarProdutoComponent, {
      header: 'Cadastrar Produto',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.modalService.ref.onClose.subscribe(() => {
      this.pesquisar();
    });
  }

}
