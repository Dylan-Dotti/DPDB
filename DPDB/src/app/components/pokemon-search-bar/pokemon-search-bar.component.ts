import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-search-bar',
  templateUrl: './pokemon-search-bar.component.html',
  styleUrls: ['./pokemon-search-bar.component.css']
})
export class PokemonSearchBarComponent {
  searchString: string = "";

  constructor(private router: Router) { }

  onSearchButtonClicked() {
    if (this.searchString != "") {
      this.router.navigate(["/pokemon/details/", this.searchString]);
      this.searchString = "";
    }
  }
}
