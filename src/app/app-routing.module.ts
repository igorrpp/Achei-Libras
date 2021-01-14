import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  //{
  //  path: '',
  //  redirectTo: 'login',
  //  pathMatch: 'full'
  //},

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },


  {
    path: 'logoff',
    loadChildren: () => import('./logoff/logoff.module').then(m => m.LogoffPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },

  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then(m => m.MapsPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'maps-geolocation',
    loadChildren: () => import('./maps-geolocation/maps-geolocation.module').then(m => m.MapsGeolocationPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'itensvencidos',
    loadChildren: () => import('./itensvencidos/itensvencidos.module').then(m => m.ItensvencidosPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'itens-vencidos-detalhe/:id',
    loadChildren: () => import('./itens-vencidos-detalhe/itens-vencidos-detalhe.module').then(m => m.ItensVencidosDetalhePageModule),
    canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'itens-vencidos-update/:id',
    loadChildren: () => import('./itens-vencidos-update/itens-vencidos-update.module').then(m => m.ItensVencidosUpdatePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'itens-vencidos-foto/:id',
    loadChildren: () => import('./itens-vencidos-foto/itens-vencidos-foto.module').then(m => m.ItensVencidosFotoPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'itens-vencidos-novo',
    loadChildren: () => import('./itens-vencidos-novo/itens-vencidos-novo.module').then(m => m.ItensVencidosNovoPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'itens-vencidos-delete/:id',
    loadChildren: () => import('./itens-vencidos-delete/itens-vencidos-delete.module').then(m => m.ItensVencidosDeletePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'cadastrar-interprete',
    loadChildren: () => import('./cadastrar-interprete/cadastrar-interprete.module').then(m => m.CadastrarInterpretePageModule)

  },
  {
    path: 'cadastrar-cliente',
    loadChildren: () => import('./cadastrar-cliente/cadastrar-cliente.module').then(m => m.CadastrarClientePageModule)
  },
  {
    path: 'interpretes',
    loadChildren: () => import('./interpretes/interpretes.module').then(m => m.InterpretesPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'interpretes-detalhe/:id',
    loadChildren: () => import('./interpretes-detalhe/interpretes-detalhe.module').then(m => m.InterpretesDetalhePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'clientes-detalhe/:id',
    loadChildren: () => import('./clientes-detalhe/clientes-detalhe.module').then(m => m.ClientesDetalhePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./recuperar-senha/recuperar-senha.module').then(m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then(m => m.CalModalPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then(m => m.CalendarioPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },


  {
    path: 'interpretes-perfil-detalhe',
    loadChildren: () => import('./interpretes-perfil-detalhe/interpretes-perfil-detalhe.module').then(m => m.InterpretesPerfilDetalhePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'interpretes-update/:id',
    loadChildren: () => import('./interpretes-update/interpretes-update.module').then(m => m.InterpretesUpdatePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'interpretes-perfil-foto/:id',
    loadChildren: () => import('./interpretes-perfil-foto/interpretes-perfil-foto.module').then(m => m.InterpretesPerfilFotoPageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },

  {
    path: 'clientes-perfil-detalhe',
    loadChildren: () => import('./clientes-perfil-detalhe/clientes-perfil-detalhe.module').then(m => m.ClientesPerfilDetalhePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'clientes-update/:id',
    loadChildren: () => import('./clientes-update/clientes-update.module').then(m => m.ClientesUpdatePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then(m => m.SobrePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
