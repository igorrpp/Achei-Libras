import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-clientes-perfil',
  templateUrl: './clientes-perfil.page.html',
  styleUrls: ['./clientes-perfil.page.scss'],
})
export class ClientesPerfilPage implements OnInit {

  constructor(
    private fb: FirebaseApp,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }


  //Função para visualizar o perfil da pessoa que está logada
  detalhe(obj: Cliente) {

    var user = this.fb.auth().currentUser.uid;
    this.navCtrl.navigateForward(['/clientes-perfil-detalhe/', user]);
  }
}
