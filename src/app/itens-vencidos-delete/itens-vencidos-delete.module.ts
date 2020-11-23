import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensVencidosDeletePageRoutingModule } from './itens-vencidos-delete-routing.module';

import { ItensVencidosDeletePage } from './itens-vencidos-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensVencidosDeletePageRoutingModule
  ],
  declarations: [ItensVencidosDeletePage]
})
export class ItensVencidosDeletePageModule {}
