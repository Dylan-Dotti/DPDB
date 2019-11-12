import { Component, OnInit, Input } from '@angular/core';
import { GenerationService } from 'src/app/services/generation.service';

@Component({
  selector: 'app-pokedex-entry-display',
  templateUrl: './pokedex-entry-display.component.html',
  styleUrls: ['./pokedex-entry-display.component.css']
})
export class PokedexEntryDisplayComponent implements OnInit {
  @Input() species;
  generations : any[];

  constructor(private genService: GenerationService) { }

  ngOnInit() {
  }

  getEntries() {
    return this.species.flavor_text_entries.filter(
      e => e.language.name === 'en').reverse();
  }

  speciesReady() {
    return this.species.flavor_text_entries;
  }
}
