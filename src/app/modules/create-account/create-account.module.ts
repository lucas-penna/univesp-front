import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account.component';


@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FieldsetModule,
    ReactiveFormsModule,
    FormsModule,
    MessageModule,
    DividerModule
  ]

})
export class CreateAccountModule { }
