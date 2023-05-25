import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  isLoginInvalid: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  login() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.authenticationService.login(this.form.value).subscribe({
        next: (success: any) => {
          this.authenticationService.storeUser(success);
          window.localStorage.setItem('SYSTEMID', this.authenticationService.getUserSession().access_token!);
          this.router.navigate([''])
        },
        error: () => {
          this.isLoginInvalid = true;
        }
      })
    }
  }

  initForm() {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, [Validators.required]]
    })
  }

  goToCreateNewAccount() {
    this.router.navigate(["create-account"]);
  }

  get email() { return this.form.get('email') }
  get password() { return this.form.get('password') }

}
