import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Cliente } from '../../_model/cliente.model';
import { ClientesService } from '../../_service/clientes.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  cliente: Cliente = new Cliente();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private clientesService: ClientesService
  ) {
    this.form = formBuilder.group({
      nome: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        BasicValidators.email
        //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      endereco: [],
      telefone: [],
      pontoDeReferencia: [],
      situacao: [false, [

      ]],
      //address: formBuilder.group({
      // street: ['', Validators.minLength(3)],
      //  suite: [],
      //  city: ['', Validators.maxLength(30)],
      //  zipcode: ['', Validators.pattern('^([0-9]){5}([-])([0-9]){4}$')]
      // })
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Cliente' : 'Novo Cliente';

      if (!id)
        return;

      this.clientesService.getCliente(id)
        .subscribe(
          cliente => this.cliente = cliente,
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
      result = this.clientesService.updateCliente(userValue);
    } else {
      result = this.clientesService.addCliente(userValue);
    }

    result.subscribe(data => this.router.navigate(['clientes']));
  }
}
