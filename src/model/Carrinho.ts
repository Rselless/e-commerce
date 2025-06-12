import { error } from "console";
import { Conta } from "./Conta";
import { Loja } from "./Loja";

export class Carrinhho {
    private _jogo: Loja
    private _conta: Conta

    constructor(jogo: Loja, conta: Conta) {
        this._jogo = jogo;
        this._conta = conta;
    }

    public comprarJogo(): number {
            if(this._conta.saldo < this._jogo.valor) {
                console.log(`Sem Saldo Suficente`)
                return this._conta.saldo
            }else {            
                return this._conta.saldo - this._jogo.valor
            }
    }
}