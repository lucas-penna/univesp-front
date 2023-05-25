import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { CrudService } from './crud.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<User, number> {

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.API}users`);
  }

  resetPassword(email: string) {
    return this._http.post(`http://localhost:8091/api/users/reset-password?email=` + email, {});
  }

  changePassword(token: string, form: any) {
    return this._http.post(`${this._url}/change-password?token=` + token, form);
  }

}
