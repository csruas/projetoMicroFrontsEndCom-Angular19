import { CarrinhoComponent } from './../../../produtos/src/app/carrinho/carrinho.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [

  {
    path: 'produtos',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component'
    }).then(m => m.AppComponent)
  },
  {
    path: 'carrinho',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Carrinho'
    }).then(m => m.CarrinhoComponent)
  },

  {
    path: 'grafico',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Component'
    }).then(m => m.AppComponent)
  },

  {path: 'home', component: HomeComponent},
  {path: '',  redirectTo: '/home', pathMatch: 'full'}
];
