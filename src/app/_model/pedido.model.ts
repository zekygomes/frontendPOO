import { Produto } from './produto.model';

export class Pedido{
    produtos : Array<Produto>;
    data : Date;
    codEntregador : number;
    codCliente : number;
    formaPagamento : number;
    status : number;
    qtdDevolucoes : number;

}