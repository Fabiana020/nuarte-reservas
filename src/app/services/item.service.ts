import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private chave = 'itensCatalogo';

  private itensIniciais: Item[] = [
    {
      id: 1,
      nome: 'Vestido vermelho',
      descricao: 'Vestido longo vermelho tamanho M.',
      categoria: 'Vestimentas',
      imagem: 'https://placehold.co/400x500',
      status: 'DISPONIVEL'
    },
    {
      id: 2,
      nome: 'Chapéu preto',
      descricao: 'Chapéu preto para composição de figurinos.',
      categoria: 'Acessórios',
      imagem: 'https://placehold.co/400x500',
      status: 'RESERVADO'
    },
    {
      id: 3,
      nome: 'Bengala cenográfica',
      descricao: 'Bengala utilizada como objeto cênico.',
      categoria: 'Objetos cênicos',
      imagem: 'https://placehold.co/400x500',
      status: 'EMPRESTADO'
    }
  ];

  private itens: Item[] = this.carregarItens();

  listar(): Item[] {
    return this.itens;
  }

  buscarPorId(id: number): Item | undefined {
    return this.itens.find(
      item => item.id === id
    );
  }

  alterarStatus(
    id: number,
    status: Item['status']
  ): void {

    const item = this.itens.find(
      item => item.id === id
    );

    if (item) {
      item.status = status;
      this.salvarItens();
    }
  }

  private salvarItens(): void {
    localStorage.setItem(
      this.chave,
      JSON.stringify(this.itens)
    );
  }

  private carregarItens(): Item[] {

    const dados = localStorage.getItem(
      this.chave
    );

    if (dados) {
      return JSON.parse(dados);
    }

    localStorage.setItem(
      this.chave,
      JSON.stringify(this.itensIniciais)
    );

    return [...this.itensIniciais];
  }
}