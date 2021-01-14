import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  @ViewChild("nome") nome; 

   imagem: any = null;
  clientes: Cliente[] = [];
  cliente: Cliente = new Cliente();
  lista : Cliente[] = [];

  constructor(
    private clienteServ : ClienteService,
    private template: TemplateService,
    private navCtrl: NavController,
    private fireStorage: AngularFireStorage,) { 

    }

  ngOnInit() {
    this.downloadImage();
  
  }

  ionViewWillEnter() {
    this.clientes = [];
    this.template.loading.then(load => {
      load.present();
      
     this.clienteServ.listar().subscribe(data => {
       
        data.map(i =>{
          let cliente : Cliente = i.payload.doc.data() as Cliente;
          cliente.id = i.payload.doc.id as string;
          this.clientes.push(cliente);
        })
        load.dismiss();
        console.log(this.cliente);
      })
    })

  };

  downloadImage() {
    let ref = this.fireStorage.storage.ref().child(`Cadastros_de_clientes/${this.cliente.id}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;
    }, err => {
      this.imagem = 'assets/img/user.png';
    })
  }
detalhe(obj : Cliente){
  this.navCtrl.navigateForward(['/clientes-detalhe/', obj.id]);
}

pesquisar(){
  console.log("Busca por: "+this.nome.value)
  this.clienteServ.buscaPorNome(this.nome.value).subscribe(response=>{
    this.clientes = [];
    this.clientes = response;
    
    
  });
}
teste(){
  if (document.getElementById("demo").innerHTML == 'Online') {
    document.getElementById("demo").style.color= "Blue";

  }else if (document.getElementById("demo").innerHTML == 'Offline') {
    document.getElementById("demo").style.color = "#ff0000"

  } else {
    (document.getElementById("demo").style.color = "red")
  }

}

}
