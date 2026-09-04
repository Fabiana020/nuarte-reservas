import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item-card',
  imports: [RouterLink],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCard {

  @Input({ required: true })
  item!: Item;

}