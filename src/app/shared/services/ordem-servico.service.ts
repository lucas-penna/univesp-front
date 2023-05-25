import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrdemServico } from '../models/OrdemServico';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService extends CrudService<OrdemServico, number> {

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.API}ordens-servicos`);
  }

}
