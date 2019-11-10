import { Component, OnInit, Input } from "@angular/core";
import { PokemonService } from "src/app/services/pokemon.service";
import { ActivatedRoute } from "@angular/router";
import { isDefined } from '@angular/compiler/src/util';
import { isUndefined, isNull } from 'util';

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.css"]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: object;
  species: object;
  evoChain: object;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.route.url.subscribe(newUrl => this.updatePokemon());
  }

  updatePokemon() {
    this.pokemon = {};
    this.pokemonService
      .getByIdentifier(this.route.snapshot.paramMap.get("idOrName"))
      .subscribe(pokemon => {
        this.pokemon = pokemon;
      },
      error => {
        this.pokemon = undefined;
      });
  }

  getPokemon() {
  }
}
