import { Observable } from 'rxjs';

export interface GetterService {
  getByIdentifier(id: string): Observable<Object>;
  getAll(): Observable<Array<Object>>;
}