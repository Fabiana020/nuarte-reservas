import { Component } from '@angular/core';

import { Item } from '../../models/item';
import { SolicitacaoService } from '../../services/solicitacao.service';

@Component({
  selector: 'app-nova-solicitacao',
  imports: [],
  templateUrl: './nova-solicitacao.html',
  styleUrl: './nova-solicitacao.css'
})
export class NovaSolicitacao {

  itens: Item[] = [];

  constructor(
    private solicitacaoService: SolicitacaoService
  ) {
    console.log('NOVA SOLICITAÇÃO ABRIU');

    console.log(
      'ITENS NO SERVICE:',
      this.solicitacaoService.listarItens()
    );

    this.itens = this.solicitacaoService.listarItens();

    console.log(
      'ITENS DA PÁGINA:',
      this.itens
    );
  }

  removerItem(id: number): void {
    this.solicitacaoService.removerItem(id);
    this.itens = this.solicitacaoService.listarItens();
  }
}