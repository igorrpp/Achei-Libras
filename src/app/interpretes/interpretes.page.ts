import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild("nome") nome; 
  imagem: any = null;
  interpretes: Interprete[] = [];
  interprete: Interprete = new Interprete();
  codImage: any = '';
  

  constructor(
    private interpreteServ : InterpreteService,
    private template: TemplateService,
    private navCtrl: NavController,
    private fireStorage: AngularFireStorage,) { 
     
    }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
     this.interpretes = [];
  
    
    this.template.loading.then(load => {
      load.present();
      
     this.interpreteServ.listar().subscribe(data => {
       
        data.map(i =>{
          let ref = this.fireStorage.storage.ref().child(`/interpretes-foto/${ i.payload.doc.id}.jpg`)
        ref.getDownloadURL().then(url => {

          let interprete : Interprete = i.payload.doc.data() as Interprete;
          this.codImage =  interprete.id = i.payload.doc.id as string;
          interprete.imagem = url;
        
          console.log(this.codImage);
          

         this.interpretes.push(interprete);
        })
        })
        load.dismiss();
      
        
       
      })
    })

  };
  
  downloadImage() {
    
    let ref = this.fireStorage.storage.ref().child(`/interpretes-foto/${this.codImage}.jpg`)
        ref.getDownloadURL().then(url => {
      this.imagem = url;
      console.log(this.imagem);
      console.log(this.imagem);
      

    }, err => {
      this.imagem =
       'assets/img/user.png';
    
    })
  }

  

detalhe(obj : Interprete){
  this.navCtrl.navigateForward(['/interpretes-detalhe/', obj.id]);
}

pesquisar(){
  console.log("Busca por: "+this.nome.value)
  this.interpreteServ.buscaPorNome(this.nome.value).subscribe(response=>{
    this.interpretes = [];
    this.interpretes = response;
    
    
  });
}

}
