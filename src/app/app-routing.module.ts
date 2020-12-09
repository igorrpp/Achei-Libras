import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

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
  },
  {
    path: 'maps-geolocation',
    loadChildren: () => import('./maps-geolocation/maps-geolocation.module').then(m => m.MapsGeolocationPageModule)
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
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'interpretes-perfil',
    loadChildren: () => import('./interpretes-perfil/interpretes-perfil.module').then( m => m.InterpretesPerfilPageModule)
  },
  
  {
    path: 'interpretes-perfil-detalhe/:id',
    loadChildren: () => import('./interpretes-perfil-detalhe/interpretes-perfil-detalhe.module').then( m => m.InterpretesPerfilDetalhePageModule)
    , canActivate: [AngularFireAuthGuard],
    data: { àuthGuardPipe: redirectToLogin }
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
