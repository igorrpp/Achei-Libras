import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NavController } from '@ionic/angular';
import { ItenVencido } from '../model/itenVencido';
import { ItenVencidoService } from '../services/itenVencido.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-itensvencidos',
  templateUrl: './itensvencidos.page.html',
  styleUrls: ['./itensvencidos.page.scss'],
})
export class ItensvencidosPage implements OnInit {
  imagem: any = null;
  itensVencidos: ItenVencido[] = [];
  itenVencido: ItenVencido = new ItenVencido();
  
  constructor(
    private itenVencidoServ : ItenVencidoService,
    private template: TemplateService,
    private navCtrl: NavController,
    private fireStorage: AngularFireStorage,) { }

  ngOnInit() {
    this.downloadImage();
  }

  ionViewWillEnter() {
    this.itensVencidos = [];
    this.template.loading.then(load => {
      load.present();
      
     this.itenVencidoServ.listar().subscribe(data => {
       
        data.map(i =>{
          let itenVencido : ItenVencido = i.payload.doc.data() as ItenVencido;
          itenVencido.id = i.payload.doc.id as string;
          this.itensVencidos.push(itenVencido);
        })
        load.dismiss();
        console.log(this.itensVencidos);
      })
    })

  };

  downloadImage() {
    let ref = this.fireStorage.storage.ref().child(`itensVencidos/${this.itenVencido.id}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;
    }, err => {
      this.imagem = 'https://icons-for-free.com/iconfiles/png/512/goods+item+label+product+tag+tally+icon-1320168020112074005.png';
    })
  }
detalhe(obj : ItenVencido){
  this.navCtrl.navigateForward(['/itens-vencidos-detalhe/', obj.id]);
}
}
