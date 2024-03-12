import { TestBed } from '@angular/core/testing';

import { PokemonService } from '../../../src/app/basic/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PokemonService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should be bring pokemon information', done => {
    service.getPokemon(1)
      .subscribe( pokemon => {
        // console.log(pokemon);
        expect(pokemon.name).toBe('bulbasaur');
        done();
      })
  });
});
