import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SolicitacaoService } from '../../services/solicitacao.service';

import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-detalhes-item',
  imports: [RouterLink],
  templateUrl: './detalhes-item.html',
  styleUrl: './detalhes-item.css'
})
export class DetalhesItem {

  item?: Item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private solicitacaoService: SolicitacaoService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.item = this.itemService.buscarPorId(id);
  }

  adicionarSolicitacao(): void {
  if (this.item && this.item.status === 'DISPONIVEL') {
    this.solicitacaoService.adicionarItem(this.item);
  }
}

}