import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ItenVencido } from '../model/itenVencido';
import { ItenVencidoService } from '../services/itenVencido.service';

@Component({
  selector: 'app-itens-vencidos-detalhe',
  templateUrl: './itens-vencidos-detalhe.page.html',
  styleUrls: ['./itens-vencidos-detalhe.page.scss'],
})
export class ItensVencidosDetalhePage implements OnInit {

  imagem: any = null;
  itenVencido: ItenVencido = new ItenVencido();
  
  constructor(
    private route: ActivatedRoute,
    private itenVencidoServ: ItenVencidoService,
    private navCtrl: NavController,
    private fireStorage: AngularFireStorage,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(url => {
      let id = url.get('id');
      this.itenVencidoServ.buscaPorId(id).subscribe(data => {
        this.itenVencido = data.payload.data();
        this.itenVencido.id = data.payload.id as string;
        console.log(this.itenVencido);
        this.downloadImage();
      })
    })
  }
  atualizar(itenVencidoObj) {
    this.navCtrl.navigateForward(['itens-vencidos-update', itenVencidoObj.id]);
  }

  excluir(itenVencidoObj) {
    this.navCtrl.navigateForward(['itens-vencidos-delete', itenVencidoObj.id]);
  }
  foto() {
    this.navCtrl.navigateForward(['/itens-vencidos-foto', this.itenVencido.id]);
  }

  downloadImage() {
    let ref = this.fireStorage.storage.ref().child(`/itensVencidos/${this.itenVencido.id}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;
    }, err => {
      this.imagem = 'https://barcarena.pa.gov.br/portal/img/itensVencidos/padrao.jpg';
    })
  }


  
}