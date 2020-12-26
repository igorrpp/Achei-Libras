import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [

  /*  {
      title: 'itensVencidos',
      url: '/itensvencidos',
      icon: 'pricetag'
    },
    {
      title: 'Novo Item',
      url: '/itens-vencidos-novo',
      icon: 'add-circle'

    },*/
   /* {
      title: ' recuperar-senha',
      url: '/recuperar-senha',
      icon: ''

    },
    */  
    /*{
      title: 'chat',
      url: '/chat',
      icon: 'create'

    },*/
    {
      title: 'perfil do interprete' ,
      url: '/interpretes-perfil',
      icon: 'save'

    },
    {
      title: 'perfil do cliente' ,
      url: '/clientes-perfil',
      icon: 'save'

    },

    {
      title: 'Maps',
      url: '/maps',
      icon: 'map'

    },
    {
      title: 'Maps Geolocation',
      url: '/maps-geolocation',
      icon: 'location'
    },

    
    
    // Opção para ficar no ap do interprete
    {
      title: 'interpretes',
      url: '/interpretes',
      icon: 'people-circle'
    },
    {
      title: 'Cadastrar Interprete',
      url: '/cadastrar-interprete',
      icon: 'clipboard'
    },
    // Opção para ficar no ap do interprete
    {
      title: 'clientes',
      url: '/clientes',
      icon: 'people'
    },
    {
      title: 'Cadastrar cliente',
      url: '/cadastrar-cliente',
      icon: 'clipboard'

    },
    {
      title: 'Sair',
      url: '/logoff',
      icon: 'power'
    },

  ];
  /*public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    public router: Router
  ) {
   /* this.initializeApp();*/
  }
/*
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('splash');
    });
  }
*/
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    } else {
      document.body.setAttribute('color-theme','light');
    }
  }
}
