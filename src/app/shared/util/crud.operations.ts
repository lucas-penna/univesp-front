import { Observable } from "rxjs";

export interface CrudOperations<T, ID> {
    create(t: T): Observable<T>;
    edit(id: ID, t: T): Observable<T>;
    delete(id: ID): Observable<any>;
    getById(id: ID): Observable<T>;
}