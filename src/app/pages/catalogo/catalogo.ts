import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { ItemCard } from '../../components/item-card/item-card';

@Component({
  selector: 'app-catalogo',
  imports: [ItemCard],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {

  itens: Item[] = [];

  constructor(private itemService: ItemService) {
    this.itens = this.itemService.listar();
  }

}