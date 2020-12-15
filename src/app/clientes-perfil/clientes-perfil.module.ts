import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPerfilPageRoutingModule } from './clientes-perfil-routing.module';

import { ClientesPerfilPage } from './clientes-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPerfilPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClientesPerfilPage]
})
export class ClientesPerfilPageModule {}
