import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from '../models/Produto';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends CrudService<Produto, number> {

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.API}produtos`);
  }

  getListDTO() {
    return this._http.get<Produto[]>(`${this._url}/list-dto`);
  }

  


}
