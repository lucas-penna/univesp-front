import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../models/Page';
import { CrudOperations } from '../util/crud.operations';
import HttpUtil from '../util/HttpUtil';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {

  constructor(
    protected _http: HttpClient,
    @Inject(String) protected _url: string
  ) { }

  create(t: T): Observable<T> {
    return this._http.post<T>('http://localhost:8091/api/users/create-user', t);
  }

  createClient(t: T): Observable<T> {
    return this._http.post<T>('http://localhost:8091/api/clientes/create-client', t);
  }

  createProduct(t: T): Observable<T> {
    return this._http.post<T>('http://localhost:8091/api/produtos/create-product', t);
  }

  edit(id: ID, t: T): Observable<T> {
    return this._http.put<T>(`${this._url}/${id}`, t);
  }
  delete(id: ID): Observable<any> {
    return this._http.delete<T>(this._url + '/' + id);
  }
  getById(id: ID): Observable<T> {
    return this._http.get<T>(this._url + "/" + id);
  }

  pesquisar(filtros: {}, pagina: number, tamanhoPagina: number, sort?: string): Observable<Page> {
    let queryFiltros = HttpUtil.getQueryParams(filtros);
    let querySort = sort ? `&sort=${sort}` : '';
    return this._http.get<Page>(`http://localhost:8091/api/clientes?${queryFiltros}&page=${pagina - 1}&size=${tamanhoPagina}${querySort}`)
  }

  pesquisarProdutos(filtros: {}, pagina: number, tamanhoPagina: number, sort?: string): Observable<Page> {
    let queryFiltros = HttpUtil.getQueryParams(filtros);
    let querySort = sort ? `&sort=${sort}` : '';
    return this._http.get<Page>(`http://localhost:8091/api/produtos?${queryFiltros}&page=${pagina - 1}&size=${tamanhoPagina}${querySort}`)
  }
}
