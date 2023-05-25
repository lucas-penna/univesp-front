import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    ResetPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
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
export class ResetPasswordModule { }
