import { Component } from '@angular/core';

import { Solicitacao } from '../../models/solicitacao';
import { Emprestimo } from '../../models/emprestimo';

import { SolicitacaoService } from '../../services/solicitacao.service';
import { EmprestimoService } from '../../services/emprestimo';

@Component({
  selector: 'app-emprestimos-nuarte',
  imports: [],
  templateUrl: './emprestimos-nuarte.html',
  styleUrl: './emprestimos-nuarte.css'
})
export class EmprestimosNuarte {

  aprovadas: Solicitacao[] = [];
  emprestimos: Emprestimo[] = [];

  constructor(
    private solicitacaoService: SolicitacaoService,
    private emprestimoService: EmprestimoService
  ) {
    this.atualizar();
  }

  atualizar(): void {

    this.aprovadas =
      this.solicitacaoService
        .listarSolicitacoes()
        .filter(
          solicitacao =>
            solicitacao.status === 'APROVADA'
        );

    this.emprestimos =
      this.emprestimoService
        .listarEmprestimos();
  }

  registrarRetirada(
    solicitacao: Solicitacao
  ): void {

    this.emprestimoService
      .registrarRetirada(solicitacao);

    this.atualizar();
  }

  devolverItem(
    emprestimoId: number,
    itemId: number
  ): void {

    this.emprestimoService
      .devolverItem(
        emprestimoId,
        itemId
      );

    this.atualizar();
  }
}