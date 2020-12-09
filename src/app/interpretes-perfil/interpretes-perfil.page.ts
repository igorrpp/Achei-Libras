import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Interprete } from '../model/interprete';
import { InterpreteService } from '../services/interprete.service';
import { TemplateService } from '../services/template.service';


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
    private interpreteServ: InterpreteService,
    private template: TemplateService,
    private navCtrl: NavController,
    private fireStorage: AngularFireStorage,) { }

  ngOnInit() {
  //  this.downloadImage();
  
  }

 /* downloadImage() {
    let ref = this.fireStorage.storage.ref().child(`Cadastros_de_interpretes/${this.interprete.id}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;
    }, err => {
      this.imagem = 'assets/img/user.png';
    })
  }*/

  //Função para visualizar o perfil da pessoa que está logada
  detalhe(obj: Interprete) {
    var user = firebase.auth().currentUser.uid;
    this.navCtrl.navigateForward(['/interpretes-perfil-detalhe/', user]);
  }
}
