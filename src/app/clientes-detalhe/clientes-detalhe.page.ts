import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';
import { InterpreteService } from '../services/interprete.service';

@Component({
  selector: 'app-clientes-detalhe',
  templateUrl: './clientes-detalhe.page.html',
  styleUrls: ['./clientes-detalhe.page.scss'],
})
export class ClientesDetalhePage implements OnInit {

  imagem: any = null;
  cliente: Cliente = new Cliente();
  
  constructor(
    private route: ActivatedRoute,
    private clienteServ : ClienteService,
    private navCtrl: NavController,
    private fireStorage: AngularFireStorage,
  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe(url => {
      let id = url.get('id');
      this.clienteServ.buscaPorId(id).subscribe(data => {
        this.cliente = data.payload.data();
        this.cliente.id = data.payload.id as string;
        console.log(this.cliente);
       this.downloadImage();
      })
    })
    
  }

 downloadImage() {
    let ref = this.fireStorage.storage.ref().child(`/Cadastros_de_interpretes/${this.cliente.id}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;
    }, err => {
      this.imagem =
       'assets/img/user.png';
    })
  }

  chat(obj : Cliente){
    this.navCtrl.navigateForward(['/chat/']);
  }

  calendario(obj : Cliente){
    this.navCtrl.navigateForward(['/calendario/']);
  }


}
