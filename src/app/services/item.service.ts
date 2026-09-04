import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itens: Item[] = [
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
      descricao: 'Chapéu preto de tecido.',
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

  listar(): Item[] {
    return this.itens;
  }

  buscarPorId(id: number): Item | undefined {
    return this.itens.find(item => item.id === id);
  }
}