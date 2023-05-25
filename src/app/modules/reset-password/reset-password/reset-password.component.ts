import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form!: FormGroup;

  userNotFound: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      email: [null, Validators.required]
    })
  }

  enviarEmail() {
    this.userNotFound = false;
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.userService.resetPassword(this.email!.value).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', detail: 'E-mail de recuperação enviado com sucesso.', life: 3000 });
          setTimeout(() => {
            this.goToLogin();
          }, 1200)
        },
        error: (err: any) => {
          this.handleError(err)
        }
      })
    }
  }

  handleError(err: any) {
    err.error.includes('Usuário não encontrado') ? this.userNotFound = true : this.messageService.add({ severity: 'error', detail: err.error });
  }

  goToLogin() {
    this.router.navigate(["login"]);
  }

  get email() { return this.form.get('email'); }

}
