import { Routes, RouterModule } from '@angular/router';

import { PedidoComponent } from './pedido.component';
import { PedidoFormComponent } from "./pedido-form/pedido-form.component";
import { PedidoListarComponent } from "./pedido-listar/pedido_listar.component";

const pedidoRoutes: Routes = [
  { path: 'pedidos', component: PedidoComponent, pathMatch: 'full' },
  { path: 'pedidos/novo', component: PedidoFormComponent},
  { path: 'pedidos/listar', component: PedidoListarComponent}
];

export const pedidoRouting = RouterModule.forChild(pedidoRoutes);
