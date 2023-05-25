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
import { CadastrarClienteComponent } from './cadastrar/cadastrar-cliente.component';

import { InputMaskModule } from 'primeng/inputmask';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ConsultarClienteComponent } from './consultar/consultar-cliente.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    ConsultarClienteComponent,
    CadastrarClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    CardModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    TableModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    InputMaskModule,
    DropdownModule
  ],
  providers: [
    DialogService,
    ConfirmationService
  ]
})
export class ClienteModule { }
