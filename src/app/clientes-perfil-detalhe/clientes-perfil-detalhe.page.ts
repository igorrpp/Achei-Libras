import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-clientes-perfil-detalhe',
  templateUrl: './clientes-perfil-detalhe.page.html',
  styleUrls: ['./clientes-perfil-detalhe.page.scss'],
})
export class ClientesPerfilDetalhePage implements OnInit {

  id: any = '';
  imagem: any = null;
  cliente: Cliente = new Cliente();

  constructor(
    private route: ActivatedRoute,
    private clienteServ : ClienteService,
    private fireStorage: AngularFireStorage,
    private navCtrl: NavController,
    private fb: FirebaseApp,


  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe(url => {
      let id = url.get('id');
      this.clienteServ.buscaPorId(id).subscribe(data => {
        this.cliente = data.payload.data();
        this.cliente.id = data.payload.id as string;
        console.log(this.cliente);
      })
    })
    this.downloadImage()

  }
  downloadImage() {
    // código para receber o id do usuário logado
   
    var uid = this.fb.auth().currentUser.uid;
    let ref = this.fireStorage.storage.ref().child(`/clientes-foto/${uid}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;


    }, err => {
      this.imagem =
        'assets/img/user.png';
    })
  }

  atualizar(uid) {
    uid = this.fb.auth().currentUser.uid;
    this.navCtrl.navigateForward(['/clientes-update', uid]);
  }

  foto() {
    this.navCtrl.navigateForward(['/clientes-perfil-foto', this.cliente.id]);
  }

  /* função para excluir "Perfil do usuário" tanto no Auth quando na colleção
  excluir2(id: string) {

    var user = firebase.auth().currentUser;

    user.delete().then(function () {
      this.interpreteServ.excluir(this.interprete.id).subscribe(data => {
        this.navCtrl.navigateRoot('login');
      })
    }).catch(function (error) {
      console.log(`Erro ao cadastrar ${error}`);

    });
  }
*/
}