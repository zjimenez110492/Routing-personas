import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PersonasComponent } from './personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoggingService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
