import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensvencidosPageRoutingModule } from './itensvencidos-routing.module';

import { ItensvencidosPage } from './itensvencidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensvencidosPageRoutingModule
  ],
  declarations: [ItensvencidosPage]
})
export class ItensvencidosPageModule {}
