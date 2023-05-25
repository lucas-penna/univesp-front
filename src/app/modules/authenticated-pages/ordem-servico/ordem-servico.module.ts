import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { CadastrarOrdemServicoComponent } from './cadastrar/cadastrar-ordem-servico.component';
import { ConsultarOrdemServicoComponent } from './consultar/consultar-ordem-servico.component';
import { OrdemServicoRoutingModule } from './ordem-servico-routing.module';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    CadastrarOrdemServicoComponent,
    ConsultarOrdemServicoComponent
  ],
  imports: [
    CommonModule,
    OrdemServicoRoutingModule,
    CardModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    TableModule,
    ConfirmDialogModule,
    InputTextareaModule,
    InputMaskModule,
    CalendarModule,
    DropdownModule
  ],
  providers: [
    DialogService,
    ConfirmationService
  ]
})
export class OrdemServicoModule { }
