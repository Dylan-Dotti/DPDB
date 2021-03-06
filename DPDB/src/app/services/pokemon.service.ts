import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeapiHttpService } from './pokeapi-http.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private pokeapiService: PokeapiHttpService) { }

  getByIdentifier(identifier: string): Observable<object> {
    return this.pokeapiService.getResource('pokemon', identifier);
  }
}
