import { error } from "console";

export class Conta {
    private _usuario:string
    private _saldo:number
    private _numConta:number
        
    constructor(usuario:string,saldo:number,numConta:number){
        this._usuario=usuario;
        this._saldo=saldo;
        this._numConta=numConta;
    }

    public get usuario(){
        return this._usuario;
    }

    public set usuario(usuario:string){
        this._usuario = usuario;
    }
    public get saldo(){
        return this._saldo;
    }

    public set saldo(saldo:number){
        this._saldo = saldo;
    }

    public get numConta(){
        return this._numConta;
    }

    public set numConta(numConta:number){
        this._numConta = numConta;
    }

    public visualizar():void{
        console.log(`\nConta:${this._usuario}, saldo:${this.saldo}, iD:${this.numConta}`)
    }   

    public novouser(novoUsuario:string):void{
        this._usuario=novoUsuario;
    }

    public addSaldo(novoValor:number):void {
        if (novoValor>0) {
            this._saldo=novoValor
        } else {
            throw error(`Saldo nao pode ser negativo`)
        }
    }
}

