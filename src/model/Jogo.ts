import { colors } from "../util/Colors";
export abstract class  Jogo {
    private _numero:number
    private _nome:string;

    constructor(numero:number,nome:string) {
        this._numero=numero;
        this._nome=nome;
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

    public visualizar():void{
        console.log(colors.fg.whitestrong,"\n\n*****************************************************");
        console.log("Dados do Jogo:");
        console.log("*****************************************************");
        console.log(`Numero na lista: ${this._numero}`);
        console.log(`Nome do jogo: ${this._nome}`);
    }
}