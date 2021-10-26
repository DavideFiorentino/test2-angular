import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPokemon } from 'src/app/models/pokemon.model';
import { ISelectedPokemon } from 'src/app/models/selected-pokemon.model';

@Component({
  selector: 'app-pokegenerator',
  templateUrl: './pokegenerator.component.html',
  styleUrls: ['./pokegenerator.component.scss'],
})
export class PokegeneratorComponent implements OnInit {
  @Input() pokemon?: IPokemon;
  @Input() pokemons: IPokemon[] = [];

  @Output() selectedPokemon = new EventEmitter<ISelectedPokemon>();

  constructor() {}

  ngOnInit(): void {}

  catchRejectPokemon(action: 'catch' | 'reject'): void {
    if (this.pokemon) {
      this.selectedPokemon.emit({ pokemon: this.pokemon, action });
    }
  }
}
