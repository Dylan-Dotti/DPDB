import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  { path: 'pokemon/details/:idOrName', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
