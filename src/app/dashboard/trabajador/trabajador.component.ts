import { Component } from '@angular/core';

@Component({
  selector: 'app-trabajador',
  standalone: true,
  imports: [],
  templateUrl: './trabajador.component.html',
  styleUrl: './trabajador.component.css'
})
export class TrabajadorComponent {
  salario: number = 0;
  anos: number = 0;
  utilidades: number | null = null;

  calcularUtilidades() {
    let porcentaje = 0;

    if (this.anos < 1) {
      porcentaje = 0.05;
    } else if (this.anos >= 1 && this.anos < 2) {
      porcentaje = 0.07;
    } else if (this.anos >= 2 && this.anos < 5) {
      porcentaje = 0.10;
    } else if (this.anos >= 5 && this.anos < 10) {
      porcentaje = 0.15;
    } else if (this.anos >= 10) {
      porcentaje = 0.20;
    }

    this.utilidades = this.salario * porcentaje;
  }
}
