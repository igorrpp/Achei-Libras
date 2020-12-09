import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpretesPerfilPage } from './interpretes-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: InterpretesPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterpretesPerfilPageRoutingModule {}
