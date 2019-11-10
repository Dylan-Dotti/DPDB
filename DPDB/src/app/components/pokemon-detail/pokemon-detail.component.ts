import { Component, OnInit, Input } from "@angular/core";
import { PokemonService } from "src/app/services/pokemon.service";
import { ActivatedRoute } from "@angular/router";
import { isDefined } from '@angular/compiler/src/util';
import { isUndefined, isNull } from 'util';
import { PokemonSpeciesService } from 'src/app/services/pokemon-species.service';

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.css"]
})
export class PokemonDetailComponent implements OnInit {
  species: any;
  pokemon: any;
  evoChain: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private speciesService: PokemonSpeciesService
  ) {}

  ngOnInit() {
    this.route.url.subscribe(newUrl => {
      this.species = {};
      this.pokemon = {};
      const identifier = this.route.snapshot.paramMap.get("idOrName").toLowerCase();
      this.updateSpecies(identifier)
    });
  }

  updateSpecies(identifier: string): void {
    this.speciesService.getByIdentifier(identifier)
    .subscribe(species => {
      this.species = species;
      this.updatePokemon(identifier);
    },
    error => {
      this.species = undefined;
    })
  }

  updatePokemon(identifier: string): void {
    this.pokemonService
      .getByIdentifier(identifier)
      .subscribe(pokemon => {
        this.pokemon = pokemon;
      },
      error => {
        this.pokemon = undefined;
      });
  }

  getGenus(): string {
    const genera = this.species.genera;
    const genusObj = genera.find(g => g.language.name === "en")
    return genusObj.genus;
  }

  speciesReady(): boolean {
    return this.species.name;
  }

  pokemonReady(): boolean {
    return this.pokemon.name;
  }
}
