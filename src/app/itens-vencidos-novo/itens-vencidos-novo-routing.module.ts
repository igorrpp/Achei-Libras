import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensVencidosNovoPage } from './itens-vencidos-novo.page';

const routes: Routes = [
  {
    path: '',
    component: ItensVencidosNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensVencidosNovoPageRoutingModule {}
