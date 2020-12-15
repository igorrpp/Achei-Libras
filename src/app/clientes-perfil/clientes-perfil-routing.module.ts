import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesPerfilPage } from './clientes-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesPerfilPageRoutingModule {}
