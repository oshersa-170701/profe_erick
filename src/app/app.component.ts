import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./register/register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent],
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
