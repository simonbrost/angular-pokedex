//larger-card.component.ts

import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChange, inject } from '@angular/core';
import { PokemonService } from '../pokeservice.service';

@Component({
  selector: 'app-larger-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './larger-card.component.html',
  styleUrl: './larger-card.component.scss'
})
export class LargerCardComponent {
  pokemonService = inject(PokemonService);
  @Input() showLargerCard: boolean = false;
  @Input() selectedPokemon: any;
  @Input() typeColor: string | undefined;
  @Input() pokemons: any[] = [];

  capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  ngOnChanges(changes: SimpleChange): void {
    if ('selectedPokemon' in changes && this.selectedPokemon) {
      this.showLargerCard = true;
      console.log(this.selectedPokemon)
    }
  }

  closeLargerCard() {
    this.showLargerCard = false;
  }

  showNext(): void {
    const currentIndex = this.pokemons.findIndex(pokemon => pokemon.id === this.selectedPokemon.id);
    const nextPokemon = this.pokemons[currentIndex + 1];
    if (nextPokemon) {
      this.selectedPokemon = nextPokemon;
      // this.updateTypeColorForSelectedPokemon();
    }
  }

  showPrev(): void {
    const currentIndex = this.pokemons.findIndex(pokemon => pokemon.id === this.selectedPokemon.id);
    const previousPokemon = this.pokemons[currentIndex - 1];
    if (previousPokemon) {
      this.selectedPokemon = previousPokemon;
      // this.updateTypeColorForSelectedPokemon();
    }
  }

  constructor() { }
}
