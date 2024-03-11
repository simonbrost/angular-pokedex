// pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  constructor(private http: HttpClient) {}

  getPokemonByCount(count: number, limit: number): Observable<any> {
    const offset = count - 1; // Offset berechnen basierend auf der Count-Nummer
    const url = `${this.baseUrl}?offset=${offset}&limit=${limit}`;
    return this.http.get<any>(url);
  }

  getPokemon(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  fetchPokemonData(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  async getTypeColor(typeName: string): Promise<string> {
    const typeColors: { [key: string]: string } = {
      'fire': 'indianred',
      'water': '#328bdd',
      'normal': 'whitesmoke',
      'bug': 'darkkhaki',
      'grass': '#9bff87',
      'electric': 'lightyellow',
      'ground': 'goldenrod',
      'psychic': 'lightsteelblue',
      'ice': 'lightskyblue',
      'rock': 'silver',
      'fighting': 'coral',
      'poison': 'yellowgreen',
      'ghost': 'mediumpurple',
      'fairy': 'pink',
      'dragon': 'moccasin',
    };

    return typeColors[typeName.toLowerCase()] || 'gray';
  }
}

