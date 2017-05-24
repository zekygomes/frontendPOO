import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Pedido } from '../../_model/pedido.model';
import { PedidosService } from '../../_service/pedidos.service';
import { BasicValidators } from '../../shared/basic-validators';


@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido_form.component.html',
  styleUrls: ['./pedido_form.component.css']
})
export class PedidoFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  pedido: Pedido = new Pedido();



  constructor( formBuilder: FormBuilder, private router: Router,
                private route: ActivatedRoute, private pedidosService: PedidosService
  ) {
    this.form = formBuilder.group({
      cliente: ['', Validators.required, Validators.minLength(3)],
      refeicoes: ['', Validators.required],
      qntRefeicao: ['', Validators.required],
      sobremesa: [],
      qntSobremesa: ['', Validators.required],
      entregador: [],

    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Fazer Pedido' : 'Fazer Pedido';

      if (!id)
        return;

      this.pedidosService.getPedido(id)
        .subscribe(
          pedido => this.pedido = pedido,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
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
