import { Item } from './item';

export interface ItemEmprestimo {
  item: Item;
  dataRetirada: Date;
  dataDevolucao?: Date;
  devolvido: boolean;
}