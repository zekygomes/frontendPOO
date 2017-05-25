import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterializeDirective } from "angular2-materialize";

import { Pedido } from '../../_model/pedido.model';
import { Produto } from '../../_model/produto.model';
import { Cliente } from '../../_model/cliente.model';
import { PedidosService } from '../../_service/pedidos.service';
import { BasicValidators } from '../../shared/basic-validators';
import { ClientesService } from '../../_service/clientes.service';
import { ProdutosService } from '../../_service/produtos.service';
import { EntregadorService } from '../../_service/entregador.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido_form.component.html',
  styleUrls: ['./pedido_form.component.css']
})
export class PedidoFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  pedido: Pedido = new Pedido();

  autocomplite:string;

  selectOptions = [];
  selectedOption;
  cliente : Cliente;

  precoRefeicao;

  produtoRefeicao;
  produtoSobremesas;
  produtoBebidas;


    constructor( private _produtoService : ProdutosService,formBuilder: FormBuilder, private router: Router,
                private route: ActivatedRoute, private pedidosService: PedidosService
  ) {

      switch(this.produtoRefeicao){
      case "Pizza":{
        this.precoRefeicao=10;
      }
      case "Sandwich":{
        this.precoRefeicao=15;
      }
      case "Esfirra":{
        this.precoRefeicao=8;
      }
    }
    this.form = formBuilder.group({
      cliente: [],
      refeicoes: [],
      qntRefeicao: [],
      sobremesa: [],
      qntSobremesa: [],
      entregador: [],
      selectedOption: [],
    });
  }

   public ngOnInit() {
     


   }

  onFileSelection(e) {
    console.log(e.target.files[0].name)
  }
  

  save() {
    var result,
        userValue = this.form.value;

    if (userValue.id){
      result = this.pedidosService.updatePedido(userValue);
    } else {
      result = this.pedidosService.addPedido(userValue);
    }

    result.subscribe(data => this.router.navigate(['pedidos']));
  }
}
