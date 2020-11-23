import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensVencidosDeletePage } from './itens-vencidos-delete.page';

const routes: Routes = [
  {
    path: '',
    component: ItensVencidosDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensVencidosDeletePageRoutingModule {}
