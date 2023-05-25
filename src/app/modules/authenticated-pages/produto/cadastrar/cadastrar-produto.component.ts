import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Produto } from 'src/app/shared/models/Produto';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit, OnDestroy {

  form!: FormGroup;

  produto: Produto = this.modalService.entity;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router,
    private messageService: MessageService,
    private modalService: ModalService
  ) { }

  ngOnDestroy(): void {
    this.modalService.entity = null;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let produto = this.produto;
    this.form = this.formBuilder.group({
      id: [produto ? produto.id : null],
      descricao: [produto ? produto.descricao : null, Validators.required],
      quantidade: [produto ? produto.quantidade : null, Validators.required],
      valor: [produto ? produto.valor : null, [Validators.required]],
      margem: [produto ? produto.margem : null, [Validators.required]]
    })
  }

  cadastrar() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.produtoService.createProduct(this.form.value).subscribe({
        complete: () => {
          this.messageService.add({ severity: 'success', detail: 'Produto cadastrado com sucesso.', life: 3000 });
          this.modalService.ref!.close();
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
      this.produtoService.edit(this.produto.id!, this.form.value).subscribe({
        complete: () => {
          this.messageService.add({ severity: 'success', detail: 'Produto editado com sucesso.', life: 3000 });
          this.modalService.ref!.close();
        },
        error: (err: any) => {
          this.messageService.add({ severity: 'error', detail: err.error });
        }
      })
    }
  }

  limpar() {
    this.form.reset();
  }

  voltar() {
    this.router.navigate(["produtos"]);
  }

  get descricao() { return this.form.get('descricao'); }
  get quantidade() { return this.form.get('quantidade'); }
  get valor() { return this.form.get('valor'); }
  get margem() { return this.form.get('margem'); }

}
