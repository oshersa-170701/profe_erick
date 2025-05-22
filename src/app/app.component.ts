import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoNuevoGit';
  constructor() {
    console.log('NUEVAS FUNCIONES')
    console.warn('CUIDADO NUEVAS FUNCIONES')
    console.log('PRUEBAS DE CONFLICTOS')
  }
}
