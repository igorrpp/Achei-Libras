import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { Interprete } from '../model/interprete';
import { InterpreteService } from '../services/interprete.service';

@Component({
  selector: 'app-interpretes-detalhe',
  templateUrl: './interpretes-detalhe.page.html',
  styleUrls: ['./interpretes-detalhe.page.scss'],
})
export class InterpretesDetalhePage implements OnInit {

  imagem: any = null;
  interprete: Interprete = new Interprete();
  
  constructor(
    private route: ActivatedRoute,
    private interpreteServ : InterpreteService,
    private navCtrl: NavController,
    private fireStorage: AngularFireStorage,
  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe(url => {
      let id = url.get('id');
      this.interpreteServ.buscaPorId(id).subscribe(data => {
        this.interprete = data.payload.data();
        this.interprete.id = data.payload.id as string;
        console.log(this.interprete);
       //his.downloadImage();
      })
    })
    
  }

 /* downloadImage() {
    let ref = this.fireStorage.storage.ref().child(`/Cadastros_de_interpretes/${this.interprete.id}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;
    }, err => {
      this.imagem =
       'https://uploads.metropoles.com/wp-content/uploads/2019/08/05090905/perfilsemfoto.jpg';
    })
  }

*/

}
