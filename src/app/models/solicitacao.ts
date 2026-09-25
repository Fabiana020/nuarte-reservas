import { Item } from './item';

export interface Solicitacao {
  id: number;
  itens: Item[];
  finalidade: string;
  professor: string;

  status:
    | 'AGUARDANDO_PROFESSOR'
    | 'INDEFERIDA_PROFESSOR'
    | 'AGUARDANDO_NUARTE';

  dataSolicitacao: Date;
  observacaoProfessor?: string;
}