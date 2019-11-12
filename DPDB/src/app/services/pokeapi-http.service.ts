import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiHttpService {
  private cache: Object;

  constructor(private httpClient: HttpClient) {
    this.cache = {};
  }

  getURLs(category: string): Observable<string[]> {
    return this.getResource(category, '?limit=10000').pipe(
      map(res => res.results.map(r => r.url)));
  }

  getResource(category: string, query: string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/${category}/${query}`;
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
}
