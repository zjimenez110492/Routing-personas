import { NgModule } from '@angular/core';

import { PersonasComponent } from '../personas/personas.component';
import { FormularioComponent } from '../personas/formulario/formulario.component';
import{Routes, RouterModule} from '@angular/router'
const routes: Routes=
[
  {path:'', component: PersonasComponent},
  {path:'personas',component:PersonasComponent},
  { path: 'personas/agregar', component: FormularioComponent},
  //Para pasar varios { path:'personas/:id/:nombre/:apellido', component:FormularioComponent} 
  { path:'personas/:id', component:FormularioComponent}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
      routes
    )
  ], exports:[RouterModule]
})
export class AppRoutingModule { }
