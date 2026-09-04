import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Catalogo } from './pages/catalogo/catalogo';
import { DetalhesItem } from './pages/detalhes-item/detalhes-item';
import { MinhasSolicitacoes } from './pages/minhas-solicitacoes/minhas-solicitacoes';
import { Perfil } from './pages/perfil/perfil';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'catalogo',
    component: Catalogo
  },
  {
    path: 'item/:id',
    component: DetalhesItem
  },
  {
    path: 'minhas-solicitacoes',
    component: MinhasSolicitacoes
  },
  {
    path: 'perfil',
    component: Perfil
  },
  {
    path: '**',
    redirectTo: 'catalogo'
  }
];