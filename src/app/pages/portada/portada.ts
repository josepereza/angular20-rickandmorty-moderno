import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portada',
  imports: [RouterLink],
  templateUrl: './portada.html',
  styleUrl: './portada.css'
})
export default class Portada {
 titulo = 'Bienvenido al Universo de Rick y Morty';
  subtitulo = 'Explora las infinitas dimensiones y aventuras intergalácticas';
  textoBoton = 'Comenzar Aventura';
}
