import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProdutosService {

  private url: string = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) { }

  getProdutos(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getProduto(id){
    return this.http.get(this.getProdutoUrl(id))
      .map(res => res.json());
  }

  addProduto(produto){
    return this.http.post(this.url, JSON.stringify(produto))
      .map(res => res.json());
  }

  updateProduto(produto){
    return this.http.put(this.getProdutoUrl(produto.id), JSON.stringify(produto))
      .map(res => res.json());
  }

  deleteProduto(id){
    return this.http.delete(this.getProdutoUrl(id))
      .map(res => res.json());
  }

  private getProdutoUrl(id){
    return this.url + "/" + id;
  }
}