import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from 'src/app/models/pokemon.model';
import { ISelectedPokemon } from 'src/app/models/selected-pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public pokemon?: IPokemon;
  public rejectedPokemons: IPokemon[] = [];
  public catchedPokemons: IPokemon[] = [];

  constructor(private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  public deletePokemon(pokemon: IPokemon) {
    this.catchedPokemons = this.catchedPokemons.filter(
      (p) => p.id !== pokemon.id
    );
  }

  public getPokemon(): void {
    this.PokemonService.getPokemon().subscribe((data) => (this.pokemon = data));
  }

  public pushPokemons(pokemon: ISelectedPokemon): void {
    if (pokemon.action === 'catch') {
      this.catchedPokemons.push(pokemon.pokemon);
    } else if (pokemon.action === 'reject') {
      this.rejectedPokemons.push(pokemon.pokemon);
    }
    this.getPokemon();
  }
}
