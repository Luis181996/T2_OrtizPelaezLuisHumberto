import { Component } from '@angular/core';

@Component({
  selector: 'app-trafico',
  standalone: true,
  imports: [],
  templateUrl: './trafico.component.html',
  styleUrl: './trafico.component.css'
})
export class TraficoComponent {
  tipoVehiculo: string = '';
  tasaAlcohol: number = 0;
  resultado: string | null = null;

  tasasMaximas: { [key: string]: number } = {
    'C': 0.3,
    'A': 0.3,
    'T': 0.5,
    'M': 0.3
  };

  verificarAlcoholemia() {
    const tasaMaxima = this.tasasMaximas[this.tipoVehiculo.toUpperCase()];
    if (tasaMaxima !== undefined) {
      if (this.tasaAlcohol > tasaMaxima) {
        this.resultado = 'Positivo';
      } else {
        this.resultado = 'Negativo';
      }
    } else {
      this.resultado = 'Tipo de vehículo no válido';
    }
  }
}
