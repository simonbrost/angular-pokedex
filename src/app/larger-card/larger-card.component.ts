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
  @Input() selectedPokemon: any; // Das ausgewählte Pokémon-Objekt
  @Input() typeColor: string | undefined;

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
  constructor() { }
}
