import { Comprar } from "./Comprar";
import { Jogo } from "./Jogo";
export class Presente extends Comprar{
    private _conta1
    private _conta2

    constructor(saldo:number,valor:number,conta1:number,conta2:number){
        super(saldo,valor);
        this._conta1=conta1;
        this._conta2=conta2;
    }
    public get recebedor() {
        return this._conta2;
    }

    public set recebedor(recebedor:number) {
        this._conta2=recebedor;
    }

    public visualizar():void {
        super.visualizar();
        console.log(`Presenteado: ${this._conta2}`);
    }

    presente(numeroOrigem: number, numeroDestino: number, valor: number): void{}
}
