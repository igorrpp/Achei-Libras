import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPerfilDetalhePageRoutingModule } from './clientes-perfil-detalhe-routing.module';

import { ClientesPerfilDetalhePage } from './clientes-perfil-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPerfilDetalhePageRoutingModule
  ],
  declarations: [ClientesPerfilDetalhePage]
})
export class ClientesPerfilDetalhePageModule {}
