import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { ClienteComponent } from './cliente.component';
import { ClientesService } from '../_service/clientes.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

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
    ClienteFormComponent
  ],
  exports: [
    ClienteComponent
  ],
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }
