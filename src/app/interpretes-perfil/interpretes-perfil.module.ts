import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterpretesPerfilPageRoutingModule } from './interpretes-perfil-routing.module';

import { InterpretesPerfilPage } from './interpretes-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterpretesPerfilPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InterpretesPerfilPage]
})
export class InterpretesPerfilPageModule {}
