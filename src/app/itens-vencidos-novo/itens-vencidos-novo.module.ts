import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensVencidosNovoPageRoutingModule } from './itens-vencidos-novo-routing.module';

import { ItensVencidosNovoPage } from './itens-vencidos-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensVencidosNovoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ItensVencidosNovoPage]
})
export class ItensVencidosNovoPageModule {}
