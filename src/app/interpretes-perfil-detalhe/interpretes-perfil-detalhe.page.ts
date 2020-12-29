import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Interprete } from '../model/interprete';
import { InterpreteService } from '../services/interprete.service';

@Component({
  selector: 'app-interpretes-perfil-detalhe',
  templateUrl: './interpretes-perfil-detalhe.page.html',
  styleUrls: ['./interpretes-perfil-detalhe.page.scss'],
})
export class InterpretesPerfilDetalhePage implements OnInit {
  id: any = '';
  imagem: any = null;
  interprete: Interprete = new Interprete();
  formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private interpreteServ: InterpreteService,
    private fireStorage: AngularFireStorage,
    private navCtrl: NavController,
    private fb: FirebaseApp,
    private formBuilder: FormBuilder,


  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe(url => {
      let id = url.get('id');
      this.interpreteServ.buscaPorId(id).subscribe(data => {
        this.interprete = data.payload.data();
        this.interprete.id = data.payload.id as string;
        console.log(this.interprete);
      })
    })
    this.downloadImage()
    this.iniciarForm();



  }
  downloadImage() {
    // código para receber o id do usuário logado

    var uid = this.fb.auth().currentUser.uid;
    let ref = this.fireStorage.storage.ref().child(`/interpretes-foto/${uid}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;


    }, err => {
      this.imagem =
        'assets/img/user.png';
    })
  }

  atualizar(uid) {
    uid = this.fb.auth().currentUser.uid;
    this.navCtrl.navigateForward(['/interpretes-update', uid]);
  }

  foto() {
    this.navCtrl.navigateForward(['/interpretes-perfil-foto', this.interprete.id]);
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

  iniciarForm() {
    
    this.formGroup = this.formBuilder.group({

      status: [this.interprete.status],
      username: [this.interprete.username],
      nome: [this.interprete.nome],
      grupo: [this.interprete.grupo],
      cpf: [this.interprete.cpf],
      cep: [this.interprete.cep],
      endereco: [this.interprete.endereco],



    
      })
    }

  atualizar2() {

    this.interpreteServ.atualizar2(this.interprete.id, this.formGroup.value).subscribe(data => {
      console.log(data);

      var user = this.fb.auth().currentUser.uid;
      this.navCtrl.navigateForward(['/interpretes-perfil-detalhe/', user]);



    })
  }
}
