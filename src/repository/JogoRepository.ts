import { Conta } from "../model/Conta";
import { Jogo } from "../model/Jogo";
export interface JogoRepository{
    //crud
    procurarPorNumero(numero: number): void;
	listarTodas(): void;
	cadastrar(conta: Conta): void;
	atualizar(conta: Conta): void;
	deletar(biblioteca: string[]): void;

    comprar(usuario:string,valor: number):void;
	presente(numeroOrigem: number, numeroDestino: number, valor: number): void;
}