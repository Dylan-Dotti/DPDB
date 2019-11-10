import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiHttpService {

  constructor(private httpClient: HttpClient) { }

  getResource(category: string, query: string): Observable<Object> {
    const url = `https://pokeapi.co/api/v2/${category}/${query}` 
    return this.httpClient.get<object>(url);
  }
}
