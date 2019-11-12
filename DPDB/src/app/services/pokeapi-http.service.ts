import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiHttpService {

  constructor(private httpClient: HttpClient) { }

  getResource(category: string, query: string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/${category}/${query}`;
    return this.httpClient.get<object>(url);
  }

  getURLs(category: string): Observable<Array<string>> {
    return this.getResource(category, '?limit=10000').pipe(
      map(res => res.results.map(r => r.url)));
  }
}
