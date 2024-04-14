import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PokemonService } from '../pokeservice.service';
import { LargerCardComponent } from '../larger-card/larger-card.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, CardComponent, LargerCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  pokemonService = inject(PokemonService);
  pokemons: any[] = [];
  selectedPokemon: any | null = null;
  showLargerCard: boolean = false;
  typeColor: string | undefined;

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

  onPokemonSelected(pokemon: any): void {
    this.selectedPokemon = pokemon;
    this.showLargerCard = true;
    this.updateTypeColorForSelectedPokemon();
  }

  async updateTypeColorForSelectedPokemon(): Promise<void> {
    this.typeColor = await this.getTypeColorForSelectedPokemon();
  }

  async getTypeColorForSelectedPokemon(): Promise<string> {
    if (this.selectedPokemon && this.selectedPokemon.types && this.selectedPokemon.types.length > 0) {
      const typeName = this.selectedPokemon.types[0].type.name;
      return await this.pokemonService.getTypeColor(typeName);
    } else {
      return 'gray';
    }
  }
}