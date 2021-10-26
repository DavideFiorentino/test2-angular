import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokegeneratorComponent } from './components/pokegenerator/pokegenerator.component';
import { PokelistComponent } from './components/pokelist/pokelist.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    PokegeneratorComponent,
    PokelistComponent,
    HomeComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, PokemonRoutingModule],
})
export class PokemonModule {}
