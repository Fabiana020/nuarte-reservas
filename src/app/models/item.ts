export interface Item {
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
  imagem: string;
  status: 'DISPONIVEL' | 'RESERVADO' | 'EMPRESTADO' | 'MANUTENCAO';
}