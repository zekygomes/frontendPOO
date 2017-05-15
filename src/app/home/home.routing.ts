import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from '../clientes/cliente.component';
import { ClienteFormComponent } from "../clientes/cliente-form/cliente-form.component";
import { ClienteListarComponent } from "../clientes/cliente-listar/cliente_listar.component";

import { PedidoComponent } from '../pedidos/pedido.component';
import { PedidoFormComponent } from "../pedidos/pedido-form/pedido-form.component";
import { PedidoListarComponent } from "../pedidos/pedido-listar/pedido_listar.component";

import { ProdutoComponent } from '../produtos/produto.component';

const homeRoutes: Routes = [
  { path: 'pedidos', component: PedidoComponent, pathMatch: 'full' },
  { path: 'pedidos/novo', component: PedidoFormComponent},
  { path: 'pedidos/listar', component: PedidoListarComponent},
  { path: 'clientes', component: ClienteComponent, pathMatch: 'full' },
  { path: 'clientes/novo', component: ClienteFormComponent},
  { path: 'clientes/listar', component: ClienteListarComponent},
  { path: 'produtos', component: ProdutoComponent, pathMatch: 'full' }
];

export const homeRouting = RouterModule.forChild(homeRoutes);