import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  private chave = 'itensSolicitacao';

  private itensSelecionados: Item[] = this.carregarItens();

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

  private salvarItens(): void {
    localStorage.setItem(
      this.chave,
      JSON.stringify(this.itensSelecionados)
    );
  }

  private carregarItens(): Item[] {

    const dados = localStorage.getItem(this.chave);

    if (dados) {
      return JSON.parse(dados);
    }

    return [];
  }
}