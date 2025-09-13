import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { InversionService } from '../inversion,service';

@Component({
  selector: 'app-resultados-inversion',
  standalone: false,
  templateUrl: './resultados-inversion.component.html',
  styleUrls: ['./resultados-inversion.component.css']
})
export class ResultadosInversionComponent {

private inversionService=inject(InversionService);


get resultados(){
  return this.inversionService.infoResultado;
}
    
 

}
