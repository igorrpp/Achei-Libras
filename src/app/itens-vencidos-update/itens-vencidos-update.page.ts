import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ItenVencido } from '../model/itenVencido';
import { ItenVencidoService } from '../services/itenVencido.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-itens-vencidos-update',
  templateUrl: './itens-vencidos-update.page.html',
  styleUrls: ['./itens-vencidos-update.page.scss'],
})
export class ItensVencidosUpdatePage implements OnInit {

  formGroup: FormGroup;
  itenVencido: ItenVencido = new ItenVencido();

  constructor(private formBuilder: FormBuilder,
    private ItenVencidoServ: ItenVencidoService,
    private template: TemplateService,

    private route: ActivatedRoute,
    private firestore: AngularFirestore) {
    this.iniciarForm();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(url => {
      let id = url.get('id');
      this.ItenVencidoServ.buscaPorId(id).subscribe(data => {
        this.itenVencido = data.payload.data();
        this.itenVencido.id = data.payload.id as string;
        this.iniciarForm();
      })
    })
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      nome: [this.itenVencido.nome, [Validators.required, Validators.minLength(5)]],
      dataVencimento: [this.itenVencido.dataVencimento, [Validators.required, Validators.minLength(5)]],
      fimCodigo: [this.itenVencido.fimCodigo, [Validators.required, Validators.minLength(5)]],
      quantidade: [this.itenVencido.quantidade, [Validators.required, Validators.minLength(1)]],
      ass: [this.itenVencido.ass, [Validators.required, Validators.minLength(5)]]
    })
  }

  atualizar() {

    this.ItenVencidoServ.atualizar(this.itenVencido.id, this.formGroup.value).subscribe(data => {
      console.log(data);
      this.template.loading;
      this.template.myAlert('Atualizado com sucesso');

      
    })
  }

}