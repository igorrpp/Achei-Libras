import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensVencidosFotoPageRoutingModule } from './itens-vencidos-foto-routing.module';

import { ItensVencidosFotoPage } from './itens-vencidos-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensVencidosFotoPageRoutingModule
  ],
  declarations: [ItensVencidosFotoPage]
})
export class ItensVencidosFotoPageModule {}
