import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/Cliente';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends CrudService<Cliente, number> {

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.API}clientes`);
  }
}
