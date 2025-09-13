import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type IngresoInversion } from '../ingreso-inversion-model';
import { InversionService } from '../inversion,service';

@Component({
  selector: 'app-ingreso-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ingreso-usuario.component.html',
  styleUrl: './ingreso-usuario.component.css'
})
export class IngresoUsuarioComponent {



  inversionInicialIngresada = signal('0');

  inversionAnualIngresada = signal('0');

  rendimientoEsperado = signal('5');
  duracionEsperada = signal('10');

  constructor(private inversionService:InversionService ){}

  alEnviar() {
    this.inversionService.calcularResultadosInversion({
      inversionInicial: + this.inversionInicialIngresada(),
      inversionAnual: +this.inversionAnualIngresada(),
      duracion: +this.duracionEsperada(),
      rendimientoEsperado: +this.rendimientoEsperado()
    })
    this.inversionInicialIngresada = signal('0');
    this.inversionAnualIngresada=signal('0');
    this.rendimientoEsperado=signal('5');
    this.duracionEsperada=signal('10');


  }

}
