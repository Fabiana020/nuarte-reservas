import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Item } from '../../models/item';
import { SolicitacaoService } from '../../services/solicitacao.service';

@Component({
  selector: 'app-nova-solicitacao',
  imports: [FormsModule],
  templateUrl: './nova-solicitacao.html',
  styleUrl: './nova-solicitacao.css'
})
export class NovaSolicitacao {

  itens: Item[] = [];

  finalidade: string = '';
  professorSelecionado: string = '';

  professores: string[] = [
    'Rebeka',
    'Alison',
    'Lavaniery'
  ];

  constructor(
    private solicitacaoService: SolicitacaoService
  ) {
    this.itens = this.solicitacaoService.listarItens();
  }

  removerItem(id: number): void {
    this.solicitacaoService.removerItem(id);
    this.itens = this.solicitacaoService.listarItens();
  }

  enviarSolicitacao(): void {

    if (this.itens.length === 0) {
      alert('Adicione pelo menos um item à solicitação.');
    return;
    }

    if (!this.finalidade.trim()) {
      alert('Informe a finalidade da solicitação.');
    return;
    }

    if (!this.professorSelecionado) {
      alert('Selecione um professor responsável.');
      return;
    }

    this.solicitacaoService.criarSolicitacao(
      this.finalidade,
      this.professorSelecionado
    );

    this.itens = [];
    this.finalidade = '';
    this.professorSelecionado = '';

    alert('Solicitação enviada com sucesso!');
  }
}