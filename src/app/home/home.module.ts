import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { ClienteComponent } from '../clientes/cliente.component';
import { ClientesService } from '../_service/clientes.service';
import { ClienteFormComponent } from '../clientes/cliente-form/cliente-form.component';
import { ClienteListarComponent } from "../clientes/cliente-listar/cliente_listar.component";

import { PedidoComponent } from '../pedidos/pedido.component';
import { PedidosService } from '../_service/pedidos.service';
import { PedidoFormComponent } from '../pedidos/pedido-form/pedido-form.component';
import { PedidoListarComponent } from '../pedidos/pedido-listar/pedido_listar.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    ClienteComponent,
    ClienteFormComponent,
    ClienteListarComponent,
    PedidoComponent,
    PedidoFormComponent,
    PedidoListarComponent,
    NavBarComponent
  ],
  exports: [
    ClienteComponent,
    PedidoComponent,
    NavBarComponent
  ],
  providers: [
    ClientesService,
    PedidosService
  ]
})
export class HomeModule { }