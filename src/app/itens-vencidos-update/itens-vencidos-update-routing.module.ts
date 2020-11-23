import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensVencidosUpdatePage } from './itens-vencidos-update.page';

const routes: Routes = [
  {
    path: '',
    component: ItensVencidosUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensVencidosUpdatePageRoutingModule {}
