import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { debounceTime } from 'rxjs';
import { Cliente } from 'src/app/shared/models/Cliente';
import { TipoPessoa } from 'src/app/shared/models/TipoPessoa';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CadastrarClienteComponent } from '../cadastrar/cadastrar-cliente.component';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {

  clientes!: Cliente[];

  page: number = 1;

  first: number = 0;

  last: number = 9;

  rows: number = 10;

  totalRecords: number = 10;

  ref!: DynamicDialogRef;

  form!: FormGroup;

  constructor(
    private clienteService: ClienteService,
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
      CPF_CNPJ: [null],
      nome: [null]
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
    this.clienteService.pesquisar(this.form.value, this.page, this.rows).subscribe({
      next: (success: any) => {
        this.clientes = success.content;
        this.totalRecords = success.totalElements;
        this.first = ((this.page - 1) * this.rows);
        this.last = (this.page * this.rows) - 1;
        this.maskCPFCNPJ();
      },
      error: (err: any) => {
      }
    })
  }

  deletar(cliente: Cliente) {
    this.clienteService.delete(cliente.id!).subscribe({
      complete: () => {
        this.messageService.add({ severity: 'success', detail: 'Cliente deletado com sucesso', life: 3000 });
        this.pesquisar();
      },
      error: (err: any) => {
        this.messageService.add({ severity: 'error', detail: err.error });
      }
    })
  }

  editarCliente(cliente: Cliente) {
    this.modalService.entity = cliente;
    this.modalService.ref = this.dialogService.open(CadastrarClienteComponent, {
      header: 'Editar Cliente',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.modalService.ref.onClose.subscribe(() => {
      this.pesquisar();
    });
  }

  deletarCliente(cliente: Cliente) {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir ' + cliente.nome + '?',
      header: ' ',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.deletar(cliente);
      }
    });
  }

  showDialog() {
    this.modalService.ref = this.dialogService.open(CadastrarClienteComponent, {
      header: 'Cadastrar Cliente',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.modalService.ref.onClose.subscribe(() => {
      this.pesquisar();
    });
  }

  maskCPFCNPJ() {
    this.clientes.forEach(cliente => {
      if (TipoPessoa.FISICA == cliente.tipoPessoa) {
        cliente.cpfcnpj = this.maskCPF(cliente.cpfcnpj!);
      } else {
        cliente.cpfcnpj = this.maskCNPJ(cliente.cpfcnpj!);
      }
      if (cliente.telefone!.length == 11) {
        cliente.telefone = this.maskCelular(cliente.telefone!)
      } else {
        cliente.telefone = this.maskTelefone(cliente.telefone!)
      }
    })
  }

  maskCPF(value: string): string {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  maskCNPJ(value: string): string {
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

  maskTelefone(value: string): string {
    return value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  maskCelular(value: string): string {
    return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

}
