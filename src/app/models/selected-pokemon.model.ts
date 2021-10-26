import { IPokemon } from './pokemon.model';

export interface ISelectedPokemon {
  pokemon: IPokemon;
  action: 'catch' | 'reject';
}
