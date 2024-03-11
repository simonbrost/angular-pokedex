import { Component, Input, inject } from '@angular/core';
import { PokemonService } from '../pokeservice.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  pokemonService = inject(PokemonService);
  @Input() pokemon: any; // Pokemon-Daten als Input erhalten

}