import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPokemon } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private urlApi = 'https://pokeapi.co/api';
  private pokemonsSubject: BehaviorSubject<IPokemon[]>;
  public pokemons$: Observable<IPokemon[]>;

  constructor(private httpClient: HttpClient) {
    this.pokemonsSubject = new BehaviorSubject<IPokemon[]>([]);
    this.pokemons$ = this.pokemonsSubject.asObservable();
  }

  public getPokemon(): Observable<IPokemon> {
    const id = Math.ceil(Math.random() * 898);
    return this.httpClient.get<IPokemon>(`${this.urlApi}/v2/pokemon/${id}`);
  }

  setPokemonSubject(pokemons: IPokemon[]): void {
    this.pokemonsSubject.next(pokemons);
  }
}
