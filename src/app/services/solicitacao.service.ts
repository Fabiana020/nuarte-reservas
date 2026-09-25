import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Solicitacao } from '../models/solicitacao';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  private chaveItens = 'itensSolicitacao';
  private chaveSolicitacoes = 'solicitacoes';

  private itensSelecionados: Item[] = this.carregarItens();
  private solicitacoes: Solicitacao[] = this.carregarSolicitacoes();

  adicionarItem(item: Item): void {
    const jaExiste = this.itensSelecionados.some(
      itemSelecionado => itemSelecionado.id === item.id
    );

    if (!jaExiste) {
      this.itensSelecionados.push(item);
      this.salvarItens();
    }
  }

  removerItem(id: number): void {
    this.itensSelecionados =
      this.itensSelecionados.filter(item => item.id !== id);

    this.salvarItens();
  }

  listarItens(): Item[] {
    return this.itensSelecionados;
  }

  limpar(): void {
    this.itensSelecionados = [];
    this.salvarItens();
  }

  criarSolicitacao(
    finalidade: string,
    professor: string
  ): Solicitacao {

    const novaSolicitacao: Solicitacao = {
      id: Date.now(),
      itens: [...this.itensSelecionados],
      finalidade,
      professor,
      status: 'AGUARDANDO_PROFESSOR',
      dataSolicitacao: new Date()
    };

    this.solicitacoes.push(novaSolicitacao);
    this.salvarSolicitacoes();

    this.limpar();

    return novaSolicitacao;
  }

  listarSolicitacoes(): Solicitacao[] {
    return this.solicitacoes;
  }

  private salvarItens(): void {
    localStorage.setItem(
      this.chaveItens,
      JSON.stringify(this.itensSelecionados)
    );
  }

  private carregarItens(): Item[] {
    const dados = localStorage.getItem(this.chaveItens);

    if (dados) {
      return JSON.parse(dados);
    }

    return [];
  }

  private salvarSolicitacoes(): void {
    localStorage.setItem(
      this.chaveSolicitacoes,
      JSON.stringify(this.solicitacoes)
    );
  }

  private carregarSolicitacoes(): Solicitacao[] {
    const dados = localStorage.getItem(this.chaveSolicitacoes);

    if (dados) {
      return JSON.parse(dados);
    }

    return [];
  }

  deferirSolicitacao(id: number): void {
  const solicitacao = this.solicitacoes.find(
    solicitacao => solicitacao.id === id
  );

  if (solicitacao) {
    solicitacao.status = 'AGUARDANDO_NUARTE';
    this.salvarSolicitacoes();
  }
  }

  indeferirSolicitacao(
    id: number,
    observacao: string
  ): void {

    const solicitacao = this.solicitacoes.find(
      solicitacao => solicitacao.id === id
    );

    if (solicitacao) {
      solicitacao.status = 'INDEFERIDA_PROFESSOR';
      solicitacao.observacaoProfessor = observacao;

      this.salvarSolicitacoes();
    }
  }
}