import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { OrdemServico } from 'src/app/shared/models/OrdemServico';
import { Produto } from 'src/app/shared/models/Produto';
import { ProdutoOrdemServico } from 'src/app/shared/models/ProdutoOrdemServico';
import { StatusOrdemServico } from 'src/app/shared/models/StatusOrdemServico';
import { OrdemServicoService } from 'src/app/shared/services/ordem-servico.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-cadastrar-ordem-servico',
  templateUrl: './cadastrar-ordem-servico.component.html',
  styleUrls: ['./cadastrar-ordem-servico.component.css']
})
export class CadastrarOrdemServicoComponent implements OnInit {

  form!: FormGroup;

  status: StatusOrdemServico[] = Object.values(StatusOrdemServico);

  ordemServico?: OrdemServico;

  produtoOrdemServico?: ProdutoOrdemServico = new ProdutoOrdemServico();

  produtosOrdemServico: ProdutoOrdemServico[] = [];

  produtos!: Produto[];

  produto?: Produto;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private ordemServicoService: OrdemServicoService,
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.initListProdutos();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [{ value: null, disabled: true }],
      dataInicio: [{ value: formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en'), disabled: true }],
      dataFim: [{ value: null, disabled: true }],
      descricao: [null, Validators.required],
      nomeCliente: [null, Validators.required],
      telefoneCliente: [null, Validators.required],
      placa: [null, Validators.required],
      marca: [null, Validators.required],
      modelo: [null, Validators.required],
      total: [null],
      statusOrdemServico: [{ value: StatusOrdemServico.ABERTO, disabled: true }],
    })
  }

  initListProdutos() {
    this.produtoService.getListDTO().subscribe({
      next: (success: any) => {
        this.produtos = success;
      },
      error: (err: any) => {
        this.messageService.add({ severity: 'error', detail: err.error });
      }
    })
  }

  cadastrar() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.ordemServicoService.create(this.form.value).subscribe({
        complete: () => {
          this.messageService.add({ severity: 'success', detail: 'Ordem de Serviço cadastrada com sucesso.', life: 3000 });
        },
        error: (err: any) => {
          this.messageService.add({ severity: 'error', detail: err.error });
        }
      })
    }
  }

  editar() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.ordemServicoService.edit(this.ordemServico!.id!, this.form.value).subscribe({
        complete: () => {
          this.messageService.add({ severity: 'success', detail: 'Ordem de Serviço editada com sucesso.', life: 3000 });
        },
        error: (err: any) => {
          this.messageService.add({ severity: 'error', detail: err.error });
        }
      })
    }
  }

  addProdutoList() {
    if(this.produto?.id){
      this.produtoOrdemServico!.id = this.produto?.id;
      this.produtoOrdemServico!.descricao = this.produto?.descricao;
      this.produtoOrdemServico!.valor = (this.produto?.valor! * (1 + (this.produto?.margem! / 100))) * this.produtoOrdemServico?.quantidade!;
      this.produtosOrdemServico.push(this.produtoOrdemServico!);
      this.produto = new Produto();
      this.produtoOrdemServico = new ProdutoOrdemServico();
    }
  }

  removeProdutoList(produtoOrdemServico: ProdutoOrdemServico) {
    this.produtosOrdemServico.splice(this.produtosOrdemServico.indexOf(produtoOrdemServico), 1);
  }

  limpar() {
    this.form.reset();
    this.initForm();
    this.produto = undefined;
    this.produtoOrdemServico = new ProdutoOrdemServico();
  }

  voltar() {
    this.router.navigate(["ordens-servico"]);
  }

  get dataInicio() { return this.form.get('dataInicio'); }
  get dataFim() { return this.form.get('dataFim'); }
  get descricao() { return this.form.get('descricao'); }
  get nomeCliente() { return this.form.get('nomeCliente'); }
  get telefoneCliente() { return this.form.get('telefoneCliente'); }
  get placa() { return this.form.get('placa'); }
  get marca() { return this.form.get('marca'); }
  get modelo() { return this.form.get('modelo'); }

}
