import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NavController } from '@ionic/angular';
import { Interprete } from '../model/interprete';
import { InterpreteService } from '../services/interprete.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-interpretes',
  templateUrl: './interpretes.page.html',
  styleUrls: ['./interpretes.page.scss'],
})
export class InterpretesPage implements OnInit {

  imagem: any = null;
  interpretes: Interprete[] = [];
  interprete: Interprete = new Interprete();

  constructor(
    private interpreteServ : InterpreteService,
    private template: TemplateService,
    private navCtrl: NavController,
    private fireStorage: AngularFireStorage,) { }

  ngOnInit() {
    this.downloadImage();
  }

  ionViewWillEnter() {
    this.interpretes = [];
    this.template.loading.then(load => {
      load.present();
      
     this.interpreteServ.listar().subscribe(data => {
       
        data.map(i =>{
          let interprete : Interprete = i.payload.doc.data() as Interprete;
          interprete.id = i.payload.doc.id as string;
          this.interpretes.push(interprete);
        })
        load.dismiss();
        console.log(this.interpretes);
      })
    })

  };

  downloadImage() {
    let ref = this.fireStorage.storage.ref().child(`Cadastros_de_interpretes/${this.interprete.id}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;
    }, err => {
      this.imagem = 'assets/img/user.png';
    })
  }
detalhe(obj : Interprete){
  this.navCtrl.navigateForward(['/interpretes-detalhe/', obj.id]);
}
}
