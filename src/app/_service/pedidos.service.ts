import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PedidosService {

  private url: string = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) { }

  getPedidos(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getPedido(id){
    return this.http.get(this.getPedidoUrl(id))
      .map(res => res.json());
  }

  addPedido(pedido){
    return this.http.post(this.url, JSON.stringify(pedido))
      .map(res => res.json());
  }

  updatePedido(pedido){
    return this.http.put(this.getPedidoUrl(pedido.id), JSON.stringify(pedido))
      .map(res => res.json());
  }

  deletePedido(id){
    return this.http.delete(this.getPedidoUrl(id))
      .map(res => res.json());
  }

  private getPedidoUrl(id){
    return this.url + "/" + id;
  }
}