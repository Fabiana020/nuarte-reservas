import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Solicitacao } from '../../models/solicitacao';
import { SolicitacaoService } from '../../services/solicitacao.service';

@Component({
  selector: 'app-solicitacoes-professor',
  imports: [FormsModule],
  templateUrl: './solicitacoes-professor.html',
  styleUrl: './solicitacoes-professor.css'
})
export class SolicitacoesProfessor {

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
            solicitacao.status === 'AGUARDANDO_PROFESSOR'
        );
  }

  deferir(id: number): void {
    this.solicitacaoService.deferirSolicitacao(id);
    this.atualizarLista();
  }

  indeferir(id: number): void {
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

    this.solicitacaoService.indeferirSolicitacao(
      id,
      observacao
    );

    this.atualizarLista();
  }
}