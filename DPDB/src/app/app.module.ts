import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PokemonSearchBarComponent } from './components/pokemon-search-bar/pokemon-search-bar.component';
import { PokedexEntryDisplayComponent } from './components/pokemon-detail/pokedex-entry-display/pokedex-entry-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    NavBarComponent,
    PokemonSearchBarComponent,
    PokedexEntryDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
