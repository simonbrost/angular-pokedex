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
  

  constructor() {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemonService.getPokemon().subscribe(data => {
      this.pokemons = data.results;
      this.loadCards();
      console.log(this.pokemons);
    });
  }

  loadCards(): void {
    // Nicht benötigt, da die Karten dynamisch im HTML-Template erstellt werden
  }
  
  getTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      'fire': '#be282879',
      'water': '#328bdd79',
      'normal': '#becbd679',
      'bug': '#87ffaf8f',
      'grass': '#9bff878f',
      // Add more types and colors as needed
    };
  
    return typeColors[type];
  }
}