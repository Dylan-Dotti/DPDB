import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemonByNameOrId(query: string): Observable<object> {
    return this.httpClient.get<object>(
      "https://pokeapi.co/api/v2/pokemon/" + query);
  }
}
