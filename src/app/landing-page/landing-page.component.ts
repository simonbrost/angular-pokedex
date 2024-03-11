import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PokemonService } from '../pokeservice.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  pokemonService = inject(PokemonService);
  pokemons: any[] = [];


  constructor() {
  }

  ngOnInit(): void {
    this.fetchPokemonData();
  }

  fetchPokemonData(): void {
    this.pokemonService.getPokemon().subscribe(data => {
      const pokemonUrls = data.results.map((pokemon: any) => pokemon.url);
      pokemonUrls.forEach((url: string) => {
        this.pokemonService.getPokemonDetails(url).subscribe(pokemonData => {
          this.pokemons.push(pokemonData);
        });
      });
    });
  }
}