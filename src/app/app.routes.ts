import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Catalogo } from './pages/catalogo/catalogo';
import { DetalhesItem } from './pages/detalhes-item/detalhes-item';
import { MinhasSolicitacoes } from './pages/minhas-solicitacoes/minhas-solicitacoes';
import { Perfil } from './pages/perfil/perfil';
import { NovaSolicitacao } from './pages/nova-solicitacao/nova-solicitacao';
import { SolicitacoesProfessor } from './pages/solicitacoes-professor/solicitacoes-professor';
import { SolicitacoesNuarte } from './pages/solicitacoes-nuarte/solicitacoes-nuarte';
import { EmprestimosNuarte } from './pages/emprestimos-nuarte/emprestimos-nuarte';

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
    path: 'solicitacao/nova',
    component: NovaSolicitacao
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
    path: 'professor/solicitacoes',
    component: SolicitacoesProfessor
  },
  {
    path: 'nuarte/solicitacoes',
    component: SolicitacoesNuarte
  },
  {
    path: 'nuarte/emprestimos',
    component: EmprestimosNuarte
  },
  {
    path: '**',
    redirectTo: 'catalogo'
  }
];