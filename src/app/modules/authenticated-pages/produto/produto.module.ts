import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CadastrarProdutoComponent } from './cadastrar/cadastrar-produto.component';
import { ConsultarProdutoComponent } from './consultar/consultar-produto.component';
import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
  declarations: [
    CadastrarProdutoComponent,
    ConsultarProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    CardModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    TableModule,
    DynamicDialogModule,
    ConfirmDialogModule
  ],
  providers:[
    DialogService,
    ConfirmationService 
  ]
})
export class ProdutoModule { }
