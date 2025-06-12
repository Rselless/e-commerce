import { Jogo } from "./Jogo";

export class Biblioteca extends Jogo {
    private _tempoJogado:number;

    constructor(numero:number,nome:string,tempoJogado:number) {
        super(numero, nome)
        this._tempoJogado = tempoJogado
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Tempo Jogado: " + this._tempoJogado + " horas");
    }
}