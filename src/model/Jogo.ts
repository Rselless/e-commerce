import { colors } from "../util/Colors";
export abstract class Jogo {

    private _numero:number
    private _nome:string;
    private _genero:string;
    private _valor:number;


    constructor(numero:number,nome:string,genero:string,valor:number) {
        this._numero=numero;
        this._nome=nome;
        this._genero=genero;
        this._valor=valor
    }
    public get numero(){
        return this._numero
    }

    public set numero(numero:number){
        this._numero=numero
    }
    public get nome(){
        return this._nome
    }

    public set nome(nome:string){
        this._nome=nome
    }

    public get genero(){
        return this._genero
    }

    public set genero(genero:string){
        this._genero=genero;
    }

    public get valor() {
        return this._valor;
    }

    public set valor(valor: number){
        this._valor = valor;
    }

    public visualizar():void{

        console.log(colors.fg.whitestrong,"\n\n*****************************************************");
        console.log("Dados do Jogo:");
        console.log("*****************************************************");
        console.log(`Numero na lista: ${this._numero}`);
        console.log(`Nome do jogo: ${this._nome}`);
        console.log(`Genero: ${this._genero}`);
        console.log(`Valor: ${this._valor.toFixed(2)}`);
    }
}