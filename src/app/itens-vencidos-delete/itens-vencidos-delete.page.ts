import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ItenVencido } from '../model/itenVencido';
import { ItenVencidoService } from '../services/itenVencido.service';

@Component({
  selector: 'app-itens-vencidos-delete',
  templateUrl: './itens-vencidos-delete.page.html',
  styleUrls: ['./itens-vencidos-delete.page.scss'],
})
export class ItensVencidosDeletePage implements OnInit {

  itenVencido: ItenVencido = new ItenVencido();

  constructor(
    private router: ActivatedRoute,
    private ItenVencidoServ: ItenVencidoService,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) { }

  

  ngOnInit(): void {

    this.router.paramMap.subscribe(resp => {
      let id = resp.get('id');
      this.firestore.collection('itenVencido').doc(id).snapshotChanges().subscribe(data => {
        this.itenVencido = data.payload.data() as ItenVencido;
        this.itenVencido.id = data.payload.id;
      })
    })
  }
  excluir(id: string) {
    this.ItenVencidoServ.excluir(this.itenVencido.id).subscribe(data=>{
      this.navCtrl.navigateRoot('itensvencidos');
    })
  }
  
}