import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type IngresoInversion } from '../ingreso-inversion-model';

@Component({
  selector: 'app-ingreso-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ingreso-usuario.component.html',
  styleUrl: './ingreso-usuario.component.css'
})
export class IngresoUsuarioComponent {

  @Output() calcular = new EventEmitter<IngresoInversion>();



  inversionInicialIngresada = '0';

  inversionAnualIngresada = '0';

  rendimientoEsperado = '5';
  duracionEsperada = '5';


  alEnviar() {
    this.calcular.emit({
      inversionInicial: + this.inversionInicialIngresada,
      inversionAnual: +this.inversionAnualIngresada,
      duracion: +this.duracionEsperada,
      rendimientoEsperado: +this.rendimientoEsperado
    })
  }

}
