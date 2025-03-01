import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../interfaces/pokemon.interface';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

    constructor(private http: HttpClient) {}

    getPokemonList(limit: number = 20): Observable<PokemonListResponse> {
        return this.http.get<PokemonListResponse>(`${this.apiUrl}?limit=${limit}`);
    }

    async fetchPokemonList(): Promise<PokemonListResponse> {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        return response.json();
    }
}