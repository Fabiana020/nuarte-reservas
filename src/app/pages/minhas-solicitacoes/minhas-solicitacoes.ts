import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Solicitacao } from '../../models/solicitacao';
import { SolicitacaoService } from '../../services/solicitacao.service';

@Component({
  selector: 'app-minhas-solicitacoes',
  imports: [DatePipe],
  templateUrl: './minhas-solicitacoes.html',
  styleUrl: './minhas-solicitacoes.css'
})
export class MinhasSolicitacoes {

  solicitacoes: Solicitacao[] = [];

  constructor(
    private solicitacaoService: SolicitacaoService
  ) {
    this.solicitacoes =
      this.solicitacaoService.listarSolicitacoes();
  }
}