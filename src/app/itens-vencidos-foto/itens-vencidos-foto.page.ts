import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ItenVencido } from '../model/itenVencido';
import { ItenVencidoService } from '../services/itenVencido.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-itens-vencidos-foto',
  templateUrl: './itens-vencidos-foto.page.html',
  styleUrls: ['./itens-vencidos-foto.page.scss'],
})
export class ItensVencidosFotoPage implements OnInit {

  foto: any = null;
  itenVencido: ItenVencido = new ItenVencido();

  fotoBlob : any = null;
  constructor( 
    private ItenVencidoServ: ItenVencidoService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private template: TemplateService

   ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(url => {

      let id = url.get('id');

      this.ItenVencidoServ.buscaPorId(id).subscribe(data => {
        this.itenVencido = data.payload.data();
        this.itenVencido.id = id;
        this.tirarFoto();
      }, err => {
        this.navCtrl.navigateRoot(['/itenvencidos']);
      })

    });
  }

  tirarFoto() {
    this.ItenVencidoServ.obterFotoCamera.subscribe(data => {
      this.foto = data;
    })
  }

  obterFoto() {
   
    this.ItenVencidoServ.obterFotoArquivo.subscribe(data => {
      this.foto = data;
    })
  }
  enviarFoto() {
    this.ItenVencidoServ.uploadFoto(this.itenVencido.id).subscribe(data => {
      console.log("Enviado");
      this.template.myAlert('Foto Enviar com sucesso!');
      this.navCtrl.navigateBack(['itens-vencidos-detalhe', this.itenVencido.id])
    }, err => {
      console.log(err);
    })

    /*this.fireStorage.storage.ref().child(`/itensVencidos/${this.cliente.id}.jpg`).put(this.fotoBlob).then(data=>{
      console.log("Enviado Com sucesso!");
    });*/
  }
}
