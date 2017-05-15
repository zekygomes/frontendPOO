import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente.component';
import {ClienteFormComponent} from "./cliente-form/cliente-form.component";

const clienteRoutes: Routes = [
  { path: 'clientes', component: ClienteComponent, pathMatch: 'full' },
  { path: 'clientes/novo', component: ClienteFormComponent},
  { path: 'clientes/:id', component: ClienteFormComponent}
];

export const clienteRouting = RouterModule.forChild(clienteRoutes);
