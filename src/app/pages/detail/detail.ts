import { Component, inject, input } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty-service';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export default class Detail {
  private api = inject(RickAndMortyService);

  /* Signal-based Input (Angular 18+) */
  id = input.required<number>();

  character  = this.api.character;
  loading    = this.api.charLoading;
  error      = this.api.charError;

  ngOnInit(): void {
    // cada vez que el input cambie, pedimos el personaje
    this.api.loadCharacter(this.id());
  }

}
