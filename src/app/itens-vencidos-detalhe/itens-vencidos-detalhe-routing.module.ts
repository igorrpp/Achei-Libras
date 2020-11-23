import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensVencidosDetalhePage } from './itens-vencidos-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ItensVencidosDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensVencidosDetalhePageRoutingModule {}
