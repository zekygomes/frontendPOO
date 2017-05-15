import { Component, OnInit } from '@angular/core';
import { ClientesService } from "../_service/clientes.service";
import { Cliente } from "../_model/cliente.model";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  private clientes: Cliente[] = [];

  constructor(private clienteService: ClientesService) { }

  ngOnInit() {
    this.clienteService.getClientes()
      .subscribe(data => this.clientes = data);
  }

  deleteCliente(cliente){
    if (confirm("Tem certeza que deseja excluir o cliente: " + cliente.name + "?")) {
      var index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);

      this.clienteService.deleteCliente(cliente.id)
        .subscribe(null,
          err => {
            alert("Cliente não excluído.");
            // Revert the view back to its original state
            this.clientes.splice(index, 0, cliente);
          });
    }
  }

}
