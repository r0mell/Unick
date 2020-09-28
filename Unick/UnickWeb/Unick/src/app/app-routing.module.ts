import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HombresComponent } from './componentes/hombres/hombres.component';
import { InicioComponent } from './componentes/inicio/inicio.component'

const routes: Routes = [
  {
    component:InicioComponent,
    path:'Inicio'
  },
  {
    component:HombresComponent,
    path:'Hombres'
  },
  {
    component: CarritoComponent,
    path:'Carrito'
  },
  {
    component:ContactoComponent,
    path:'Contacto'
  },
  {
    component:FooterComponent,
    path:'Footer'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
