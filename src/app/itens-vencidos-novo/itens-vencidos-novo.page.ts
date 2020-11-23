import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ItenVencido } from '../model/itenVencido';
import { ItenVencidoService } from '../services/itenVencido.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-itens-vencidos-novo',
  templateUrl: './itens-vencidos-novo.page.html',
  styleUrls: ['./itens-vencidos-novo.page.scss'],
})
export class ItensVencidosNovoPage implements OnInit {

  imagem: any = null;
  itenVencido: ItenVencido = new ItenVencido();
  formGroup: FormGroup;

  constructor( private ItenVencidoServ: ItenVencidoService,
    private formBuilder: FormBuilder,
    private itenVencidoServ: ItenVencidoService,
    private template: TemplateService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private fireStorage: AngularFireStorage,) {
    this.iniciarForm();
  }

  ngOnInit() {
    
  }

  cadastrar() {

    this.template.loading.then(load => {
      load.present();
      this.ItenVencidoServ.cadastrar(this.formGroup.value).subscribe(
        data => {
          load.dismiss();
          this.template.myAlert('Cadastrado com sucesso');
          //Limpar informações no formulário!
          this.formGroup.reset();
          //this.navCtrl.navigateBack(['clientes'])
        },
        err => {
          this.template.myAlert('Erro ao cadastrar');
        });
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
  foto() {
    this.navCtrl.navigateForward(['/itens-vencidos-foto', this.itenVencido.id]);
  }
}
