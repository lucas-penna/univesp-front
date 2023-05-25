import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { createInitialState, UserSessionStore } from '../models/auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly _urlBase: string = `${environment.API}login`

  constructor(
    private _http: HttpClient,
    private router: Router,
    private userSessionStore: UserSessionStore,
    private messageService: MessageService
  ) {
  }

  login(login: any) {
    return this._http.post<any>('http://localhost:8091/api/login', login);
  }

  storeUser(usuarioAutenticado: any) {
    this.userSessionStore._setState(usuarioAutenticado);
  }

  getUserSession() {
    return this.userSessionStore._value();
  }

  getToken() {
    return window.localStorage.getItem('SYSTEMID');
  }

  checkToken() {
    return this._http.get(`${environment.API}auth/check-token`);
  }

  expirarSessao() {
    this.messageService.add({ severity: 'error', detail: 'Sessão expirada! Favor realizar login novamente' });
    this.logout();
  }

  logout() {
    window.localStorage.clear();
    this.userSessionStore.update(createInitialState());
    this.router.navigate(['login']);
  }

}
