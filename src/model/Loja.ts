import { colors } from "../util/Colors";
import { Jogo } from "./Jogo";

export class Loja extends Jogo {
    private _valor:number;

    constructor(numero:number,nome:string,valor:number) {
        super(numero, nome)
        this._valor = valor
    }

    public get valor(){
        return this._valor
    }

    public set valor(valor:number){
        this._valor=valor
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Valor: " + this._valor.toFixed(2));
    }
}