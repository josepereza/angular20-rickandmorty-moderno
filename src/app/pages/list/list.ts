import { Component, computed, inject } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty-service';
import { RouterLink } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [RouterLink,FormsModule, JsonPipe],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export default class List {
private api = inject(RickAndMortyService);

  characters = this.api.charactersRs();
  mischaracters=computed(()=>this.characters.value()?.results)
  term = '';

  search() {
    this.api.search(this.term);
  }
}
