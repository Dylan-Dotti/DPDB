import { Injectable } from '@angular/core';
import { PokeapiHttpService } from './pokeapi-http.service';
import { HttpGetterService } from '../interfaces/http-getter-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService implements HttpGetterService {

  constructor(private pokeapiService: PokeapiHttpService) { }

  getByIdentifier(id: string) {
    return this.pokeapiService.getResource('pokemon-species', id);
  }

  getURLs(): Observable<string[]> {
    return this.pokeapiService.getURLs('pokemon-species');
  }

  getAll(): Observable<Object[]> {
    return null;
  }
}
