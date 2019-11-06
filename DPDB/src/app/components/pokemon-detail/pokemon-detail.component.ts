import { Component, OnInit, Input } from "@angular/core";
import { PokemonService } from "src/app/services/pokemon.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.css"]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: object;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.route.url.subscribe(newUrl => {
      this.pokemon = undefined;
      this.pokemonService
        .getPokemonByNameOrId(this.route.snapshot.paramMap.get("pokemonName"))
        .subscribe(pokemon => {
          console.log(pokemon);
          this.pokemon = pokemon;
        });
    });
  }
}
