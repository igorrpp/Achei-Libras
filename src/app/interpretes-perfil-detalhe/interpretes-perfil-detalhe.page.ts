import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private interpreteServ: InterpreteService,
    private fireStorage: AngularFireStorage,


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

  }
  downloadImage() {
    let ref = this.fireStorage.storage.ref().child(`/Cadastros_de_interpretes/${this.interprete.id}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;
    }, err => {
      this.imagem =
       'assets/img/user.png';
    })
  }

}
