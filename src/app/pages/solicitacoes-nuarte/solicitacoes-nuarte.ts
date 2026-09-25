import { Component } from '@angular/core';

import { Solicitacao } from '../../models/solicitacao';
import { SolicitacaoService } from '../../services/solicitacao.service';

@Component({
  selector: 'app-solicitacoes-nuarte',
  imports: [],
  templateUrl: './solicitacoes-nuarte.html',
  styleUrl: './solicitacoes-nuarte.css'
})
export class SolicitacoesNuarte {

  solicitacoes: Solicitacao[] = [];

  constructor(
    private solicitacaoService: SolicitacaoService
  ) {
    this.atualizarLista();
  }

  atualizarLista(): void {
    this.solicitacoes =
      this.solicitacaoService
        .listarSolicitacoes()
        .filter(
          solicitacao =>
            solicitacao.status === 'AGUARDANDO_NUARTE'
        );
  }

  aprovar(id: number): void {

    this.solicitacaoService
      .aprovarSolicitacaoNuarte(id);

    this.atualizarLista();
  }

  negar(id: number): void {

    const observacao = prompt(
      'Informe o motivo do indeferimento:'
    );

    if (observacao === null) {
      return;
    }

    if (!observacao.trim()) {
      alert('Informe o motivo do indeferimento.');
      return;
    }

    this.solicitacaoService.negarSolicitacaoNuarte(
      id,
      observacao
    );

    this.atualizarLista();
  }
}