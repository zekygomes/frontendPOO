import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdIconModule} from '@angular/material';

import { ClienteComponent } from '../clientes/cliente.component';
import { ClientesService } from '../_service/clientes.service';
import { ClienteFormComponent } from '../clientes/cliente_form/cliente_form.component';
import { ClienteListarComponent } from "../clientes/cliente_listar/cliente_listar.component";

import { PedidoComponent } from '../pedidos/pedido.component';
import { PedidosService } from '../_service/pedidos.service';
import { PedidoFormComponent } from '../pedidos/pedido_form/pedido_form.component';
import { PedidoListarComponent } from '../pedidos/pedido_listar/pedido_listar.component';

import { ProdutoComponent } from '../produtos/produto.component';
import { ProdutosService } from '../_service/produtos.service';
import { ProdutoFormComponent } from '../produtos/produto_form/produto_form.component';
import { ProdutoListarComponent } from '../produtos/produto_listar/produto_listar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    BrowserAnimationsModule,
    MdIconModule
  ],
  declarations: [
    NavBarComponent,
    ClienteComponent,
    ClienteFormComponent,
    ClienteListarComponent,
    PedidoComponent,
    PedidoFormComponent,
    PedidoListarComponent,
    ProdutoComponent,
    ProdutoFormComponent,
    ProdutoListarComponent
    
  ],
  exports: [
    NavBarComponent,
    ClienteComponent,
    PedidoComponent,
    ProdutoComponent,
    BrowserAnimationsModule,
    MdIconModule
  ],
  providers: [
    ClientesService,
    PedidosService,
    ProdutosService
  ]
})
export class HomeModule { }