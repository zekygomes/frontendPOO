import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterializeDirective } from "angular2-materialize";

import { Pedido } from '../../_model/pedido.model';
import { PedidosService } from '../../_service/pedidos.service';
import { BasicValidators } from '../../shared/basic-validators';


@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido_form.component.html',
  styleUrls: ['./pedido_form.component.css']
})
export class PedidoFormComponent implements OnInit {

   firstName = "";
  selectedOption = "";

  selectOptions = [];

  isTest5Checked = false;
  isTest6Checked = true;
  
  radioButtonValue = 3;

  maxLength = 20;
  autocompleteInit = {
    'data': {'Apple': null, 'Google': null},
    onAutocomplete: (val) => {
      console.log(val);
    },
  };
  isDisabled = false;

   public ngOnInit() {
      window.setTimeout(()=>{
        this.selectOptions = [
          {value:1,name:"Option 1"},
          {value:2,name:"Option 2"},
          {value:3,name:"Option 3"}
        ]
      },100);
   }

  onFileSelection(e) {
    console.log(e.target.files[0].name)
  }
  
  form: FormGroup;
  title: string;
  pedido: Pedido = new Pedido();

  autocomplite:string;


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
      selectedOption: [],
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
