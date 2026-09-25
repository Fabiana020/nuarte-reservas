import { Injectable } from '@angular/core';

import { Emprestimo } from '../models/emprestimo';
import { Solicitacao } from '../models/solicitacao';

import { ItemService } from './item.service';
import { SolicitacaoService } from './solicitacao.service';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  private chave = 'emprestimos';

  private emprestimos: Emprestimo[] =
    this.carregarEmprestimos();

  constructor(
    private itemService: ItemService,
    private solicitacaoService: SolicitacaoService
  ) {}

  registrarRetirada(
    solicitacao: Solicitacao
  ): void {

    const jaExiste = this.emprestimos.some(
      emprestimo =>
        emprestimo.solicitacaoId === solicitacao.id
    );

    if (jaExiste) {
      return;
    }

    const emprestimo: Emprestimo = {

      id: Date.now(),

      solicitacaoId: solicitacao.id,

      itens: solicitacao.itens.map(item => ({
        item,
        dataRetirada: new Date(),
        devolvido: false
      }))
    };

    this.emprestimos.push(emprestimo);

    solicitacao.itens.forEach(item => {
      this.itemService.alterarStatus(
        item.id,
        'EMPRESTADO'
      );
    });

    this.solicitacaoService
      .marcarComoEmprestada(solicitacao.id);

    this.salvarEmprestimos();
  }

  listarEmprestimos(): Emprestimo[] {
    return this.emprestimos;
  }

  devolverItem(
    emprestimoId: number,
    itemId: number
  ): void {

    const emprestimo = this.emprestimos.find(
      emprestimo =>
        emprestimo.id === emprestimoId
    );

    if (!emprestimo) {
      return;
    }

    const itemEmprestimo =
      emprestimo.itens.find(
        registro =>
          registro.item.id === itemId
      );

    if (!itemEmprestimo) {
      return;
    }

    itemEmprestimo.devolvido = true;
    itemEmprestimo.dataDevolucao = new Date();

    this.itemService.alterarStatus(
      itemId,
      'DISPONIVEL'
    );

    const todosDevolvidos =
      emprestimo.itens.every(
        item => item.devolvido
      );

    if (todosDevolvidos) {

      this.solicitacaoService
        .finalizarSolicitacao(
          emprestimo.solicitacaoId
        );
    }

    this.salvarEmprestimos();
  }

  private salvarEmprestimos(): void {

    localStorage.setItem(
      this.chave,
      JSON.stringify(this.emprestimos)
    );
  }

  private carregarEmprestimos(): Emprestimo[] {

    const dados =
      localStorage.getItem(this.chave);

    if (dados) {
      return JSON.parse(dados);
    }

    return [];
  }
}