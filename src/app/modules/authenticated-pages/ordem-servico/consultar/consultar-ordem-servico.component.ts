import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { debounceTime } from 'rxjs';
import { OrdemServico } from 'src/app/shared/models/OrdemServico';
import { ModalService } from 'src/app/shared/services/modal.service';
import { OrdemServicoService } from 'src/app/shared/services/ordem-servico.service';

@Component({
  selector: 'app-consultar-ordem-servico',
  templateUrl: './consultar-ordem-servico.component.html',
  styleUrls: ['./consultar-ordem-servico.component.css']
})
export class ConsultarOrdemServicoComponent implements OnInit {

  ordensServico!: OrdemServico[];

  page: number = 1;

  first: number = 0;

  last: number = 9;

  rows: number = 10;

  totalRecords: number = 10;

  ref!: DynamicDialogRef;

  form!: FormGroup;

  constructor(
    private ordemServicoService: OrdemServicoService,
    private messageService: MessageService,
    public dialogService: DialogService,
    public modalService: ModalService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder,
    private router: Router
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
    this.ordemServicoService.pesquisar(this.form.value, this.page, this.rows).subscribe({
      next: (success: any) => {
        this.ordensServico = success.content;
        this.totalRecords = success.totalElements;
        this.first = ((this.page - 1) * this.rows);
        this.last = (this.page * this.rows) - 1;
      },
      error: (err: any) => {
      }
    })
  }

  deletar(ordemServico: OrdemServico) {
    this.ordemServicoService.delete(ordemServico.id!).subscribe({
      complete: () => {
        this.messageService.add({ severity: 'success', detail: 'Ordem Serviço deletada com sucesso', life: 3000 });
        this.pesquisar();
      },
      error: (err: any) => {
        this.messageService.add({ severity: 'error', detail: err.error });
      }
    })
  }

  editarOrdemServico(ordemServico: OrdemServico) {
  }

  deletarOrdemServico(ordemServico: OrdemServico) {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir a Ordem de Serviço Nº' + ordemServico.id + '?',
      header: ' ',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.deletar(ordemServico);
      }
    });
  }

  cadastrar() {
    this.router.navigate(["ordens-servico/new"]);
  }

}
