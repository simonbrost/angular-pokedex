import { Component, Input, inject, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokeservice.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  pokemonService = inject(PokemonService);
  @Input() pokemon: any;
  @Output() pokemonSelected: EventEmitter<any> = new EventEmitter<any>(); // Ereignis für ausgewähltes Pokémon
  typeColor: string | undefined;
  
  constructor() {}

  async ngOnInit(): Promise<void> {
    if (this.pokemon && this.pokemon.types && this.pokemon.types.length > 0) {
      const typeName = this.pokemon.types[0].type.name;
      this.typeColor = await this.pokemonService.getTypeColor(typeName);
    }
  }
  onSelectPokemon(): void {
    this.pokemonSelected.emit(this.pokemon); // Ausgewähltes Pokémon an Elternkomponente übergeben
  }
}