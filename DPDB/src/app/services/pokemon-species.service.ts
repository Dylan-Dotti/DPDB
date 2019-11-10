import { Injectable } from '@angular/core';
import { PokeapiHttpService } from './pokeapi-http.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService {

  constructor(private pokeapiService: PokeapiHttpService) { }

  getByIdentifier(identifier: string) {
    return this.pokeapiService.getResource('pokemon-species', identifier)
  }
}
