import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
    {
      title: ' recuperar-senha',
      url: '/recuperar-senha',
      icon: ''

    },
   
    {
      title: 'Editar Perfil',
      url: '/clientes-update',
      icon: ''

    },
    /*{
      title: 'chat',
      url: '/chat',
      icon: 'create'

    },*/

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
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

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
