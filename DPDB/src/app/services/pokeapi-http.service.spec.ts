import { TestBed } from '@angular/core/testing';

import { PokeapiHttpService } from './pokeapi-http.service';

describe('PokeapiHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeapiHttpService = TestBed.get(PokeapiHttpService);
    expect(service).toBeTruthy();
  });
});
