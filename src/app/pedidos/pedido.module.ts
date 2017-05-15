import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { PedidoComponent } from './pedido.component';
import { PedidosService } from '../_service/pedidos.service';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import { PedidoListarComponent } from './pedido-listar/pedido_listar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    PedidoComponent,
    PedidoFormComponent,
    PedidoListarComponent
  ],
  exports: [
    PedidoComponent
  ],
  providers: [
    PedidosService
  ]
})
export class PedidosModule { }
