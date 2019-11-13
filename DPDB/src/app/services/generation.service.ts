import { Injectable } from '@angular/core';
import { PokeapiHttpService } from './pokeapi-http.service';
import { HttpGetterService } from '../interfaces/http-getter-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerationService implements HttpGetterService {

  constructor(private pokeapiService: PokeapiHttpService) { }

  getURLs(): Observable<string[]> {
    return this.pokeapiService.getURLs('generation');
  }

  getByIdentifier(id: string) {
    return this.pokeapiService.getResource('generation', id);
  }

  getAll(): Observable<Observable<object>[]> {
    return this.pokeapiService.getAllResources('generation');
  }
}
