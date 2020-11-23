import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensVencidosUpdatePageRoutingModule } from './itens-vencidos-update-routing.module';

import { ItensVencidosUpdatePage } from './itens-vencidos-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensVencidosUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ItensVencidosUpdatePage]
})
export class ItensVencidosUpdatePageModule {}
