import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensVencidosDetalhePageRoutingModule } from './itens-vencidos-detalhe-routing.module';

import { ItensVencidosDetalhePage } from './itens-vencidos-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensVencidosDetalhePageRoutingModule
  ],
  declarations: [ItensVencidosDetalhePage]
})
export class ItensVencidosDetalhePageModule {}
