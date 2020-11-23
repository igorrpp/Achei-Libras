import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensVencidosFotoPage } from './itens-vencidos-foto.page';

const routes: Routes = [
  {
    path: '',
    component: ItensVencidosFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensVencidosFotoPageRoutingModule {}
