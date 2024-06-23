import { Component } from '@angular/core';

@Component({
  selector: 'app-escuela',
  standalone: true,
  imports: [],
  templateUrl: './escuela.component.html',
  styleUrl: './escuela.component.css'
})
export class EscuelaComponent {
  
  materias: number = 0;
  costoPorMateria: number = 520;
  costoTotal: number | null = null;
  descuento: number = 0;

  calcularMatricula() {
    let total = this.materias * this.costoPorMateria;

    if (this.materias > 5) {
      this.descuento = total * 0.10;
      total = total - this.descuento;
    } else {
      this.descuento = 0;
    }

    this.costoTotal = total;
  }
}
