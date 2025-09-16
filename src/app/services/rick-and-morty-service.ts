import { httpResource } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Character, RickyResponse } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  /* ---------- señales que actúan como parámetros dinámicos ---------- */
  readonly nameFilter = signal('');   // búsqueda
  readonly charId     = signal(0);    // detalle

  /* ---------- recursos expuestos ---------- */
  
  isLoading: any;

  charactersRs(){
    return httpResource<RickyResponse | undefined>(
    () => `https://rickandmortyapi.com/api/character/?page=1&name=${this.nameFilter()}`
  )
  }

  readonly characterResource = httpResource<Character>(
    () => `https://rickandmortyapi.com/api/character/${this.charId()}`
  );

  /* ---------- helpers rápidos ---------- */
  readonly character  = computed(() => this.characterResource.value()); // ← si existe

 

  readonly charLoading= this.characterResource.isLoading;
  readonly charError  = this.characterResource.error;

  /* ---------- acciones ---------- */
  search(name: string): void {
    this.nameFilter.set(name);
  }

  loadCharacter(id: number): void {
    this.charId.set(id);
  }
}
