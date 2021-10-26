import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  pokemons!: IPokemon[];
  pokemon?: IPokemon;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPokemonsFromObservable();
  }

  getPokemonsFromObservable() {
    this.pokemonService.pokemons$.subscribe((data) => (this.pokemons = data));
    const id = this.activatedRoute.snapshot.params.id;
    this.pokemon = this.pokemons.find((pokemon) => pokemon.id == id);
  }

  goToHome() {
    this.router.navigate(['pokemon']);
  }
}
