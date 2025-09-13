import { Component, signal } from '@angular/core';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { IngresoUsuarioComponent } from "./ingreso-usuario/ingreso-usuario.component";
import { type IngresoInversion } from './ingreso-inversion-model';
import { ResultadosInversionComponent } from "./resultados-inversion/resultados-inversion.component";

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [EncabezadoComponent, IngresoUsuarioComponent, ResultadosInversionComponent],
})
export class AppComponent {







}
