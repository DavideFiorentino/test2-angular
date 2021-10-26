import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss'],
})
export class PokelistComponent implements OnInit {
  @Input() pokemons!: IPokemon[];
  @Input() hideBtn = '';
  @Input() bgColor = '';

  @Output() deletedPokemon = new EventEmitter<IPokemon>();

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  deletePokemon(pokemon: IPokemon) {
    this.deletedPokemon.emit(pokemon);
  }

  pokemonDetails(id: number): void {
    this.pokemonService.setPokemonSubject(this.pokemons);
    this.router.navigate(['details', id], { relativeTo: this.activatedRoute });
  }
}
