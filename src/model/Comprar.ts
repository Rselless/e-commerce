import { Conta } from "./Conta";
export class Comprar {
    private _saldo
    private _valor

    constructor(saldo:number,valor:number){
    this._saldo=saldo;
    this._valor=valor;
    }
        
    public comprar(valor: number): boolean {

        if (this._saldo < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }

        this._saldo = this._saldo - valor;
        return true;
    }
    public visualizar():void{
}
}
