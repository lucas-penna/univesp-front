import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let token = this.route.snapshot.data['token'];
    this.form = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      token: [token]
    })
  }

  atualizarSenha() {
    this.form.markAllAsTouched();
    if (this.form.valid && (this.password?.value == this.confirmPassword?.value)) {
      this.userService.changePassword(this.token?.value, this.form.value).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', detail: 'Senha alterada com sucesso.', life: 1500 });
          setTimeout(() => {
            this.router.navigate(["login"]);
          }, 1200)
        },
        error: (err: any) => {
          this.messageService.add({ severity: 'error', detail: err.error })
        }
      })
    }
  }

  get password() { return this.form.get('password'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }
  get token() { return this.form.get('token'); }

}
