import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { IndexComponent } from './components/index/index.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [
  {path:'addProduc',component:IngresoComponent},
  {path:'',component:IndexComponent},
  {path:'comfim',component:DescripcionComponent},
  {path:'listPedidos',component:PedidosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
