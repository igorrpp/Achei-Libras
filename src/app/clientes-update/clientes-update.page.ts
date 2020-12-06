import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../model/cliente';
import { User} from '../services/chat.service';
import { ClienteService } from '../services/cliente.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.page.html',
  styleUrls: ['./clientes-update.page.scss'],
})
export class ClientesUpdatePage implements OnInit {

  formGroup: FormGroup;
  cliente: Cliente = new Cliente();

  constructor(private formBuilder: FormBuilder,
    private ClienteServ: ClienteService,
    private template: TemplateService,

    private route: ActivatedRoute,
    private firestore: AngularFirestore) {
    this.iniciarForm();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(url => {
      let id = url.get('id');
      this.ClienteServ.buscaPorId(id).subscribe(data => {
        this.cliente = data.payload.data();
        this.cliente.id = data.payload.id as string;
        this.iniciarForm();
      })
    })
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]],
      nome: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(32)]],
      grupo: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
      deficiencia: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      endereco: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],

    })
  }

  atualizar() {

    this.ClienteServ.atualizar(this.cliente.id, this.formGroup.value).subscribe(data => {
      console.log(data);
      this.template.loading;
      this.template.myAlert('Atualizado com sucesso');

      
    })
  }

}

