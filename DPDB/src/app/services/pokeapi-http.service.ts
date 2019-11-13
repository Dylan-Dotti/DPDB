import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiHttpService {
  private baseURL: string;
  private cache: object;

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'https://pokeapi.co/api/v2'
    this.cache = {};
  }

  getURLs(category: string): Observable<string[]> {
    return this.getResource(category, '?limit=10000').pipe(
      map(res => res.results.map(r => r.url)));
  }

  getIDs(category: string): Observable<string[]> {
    return this.getURLs(category).pipe(
      map(urls => urls.map(url => url.replace(
        `${this.baseURL}/${category}/`, ''))
      )
    );
  }

  getResource(category: string, query: string): Observable<any> {
    const url = `${this.baseURL}/${category}/${query}`;
    if (!this.cache[category]) {
      this.cache[category] = [];
    }
    if (this.cache[category][query]) {
      return of(this.cache[category][query]);
    }
    const observableRes = this.httpClient.get<any>(url);
    observableRes.subscribe(res => {
      this.cache[category][query] = res;
    });
    return observableRes;
  }

  getAllResources(category: string): Observable<Observable<object>[]> {
    return this.getIDs(category).pipe(map(
      ids => ids.map(id => this.getResource(category, id))
    ));
  }
}
