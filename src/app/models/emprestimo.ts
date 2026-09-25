import { ItemEmprestimo } from './item-emprestimo';

export interface Emprestimo {
  id: number;
  solicitacaoId: number;
  itens: ItemEmprestimo[];
}