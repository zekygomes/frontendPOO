import { Pessoa } from './pessoa.model';

export class Cliente extends Pessoa{
    endereço : String;
    telefone : String;
    pontoDeReferencia : String;
    situacao : boolean;
}