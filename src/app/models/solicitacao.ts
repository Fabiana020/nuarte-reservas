import { Item } from './item';

export interface Solicitacao {
  id: number;
  itens: Item[];
  finalidade: string;
  professor: string;

  status:
    | 'AGUARDANDO_PROFESSOR'
    | 'INDEFERIDA_PROFESSOR'
    | 'AGUARDANDO_NUARTE'
    | 'NEGADA_NUARTE'
    | 'APROVADA'
    | 'EMPRESTADA'
    | 'FINALIZADA';

  dataSolicitacao: Date;

  observacaoProfessor?: string;
  observacaoNuarte?: string;
}