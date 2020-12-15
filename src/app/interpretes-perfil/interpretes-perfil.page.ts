import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { NavController } from '@ionic/angular';
import { Interprete } from '../model/interprete';



@Component({
  selector: 'app-interpretes-perfil',
  templateUrl: './interpretes-perfil.page.html',
  styleUrls: ['./interpretes-perfil.page.scss'],
})
export class InterpretesPerfilPage implements OnInit {

  imagem: any = null;
  interpretes: Interprete[] = [];
  interprete: Interprete = new Interprete();

  constructor(
    private fb: FirebaseApp,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
 
  }


  //Função para visualizar o perfil da pessoa que está logada
  detalhe(obj: Interprete) {

    var user = this.fb.auth().currentUser.uid;
    this.navCtrl.navigateForward(['/interpretes-perfil-detalhe/', user]);
  }
}
