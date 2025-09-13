import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { IngresoUsuarioComponent } from "./ingreso-usuario/ingreso-usuario.component";
import { ResultadosInversionComponent } from "./resultados-inversion/resultados-inversion.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
  declarations: [AppComponent,
    EncabezadoComponent,
    IngresoUsuarioComponent,
    ResultadosInversionComponent],
    imports: [BrowserModule,FormsModule],
    bootstrap: [AppComponent]
})

export class AppModule{}
