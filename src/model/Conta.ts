import { Jogo } from "./Jogo";

export class Conta {
    private _usuario
    private _saldo
    private _biblioteca
    private _numConta
    
    constructor(usuario:string,saldo:number,biblioteca: Array<number>=new Array<number>(),numConta:number){
        this._usuario=usuario;
        this._saldo=saldo;
        this._biblioteca=biblioteca
        this._numConta=numConta
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
    
        public get biblioteca(){
        return this._biblioteca;
    }

        public set biblioteca(biblioteca:number[]){
        this._biblioteca = biblioteca;
    }

        public get numConta(){
        return this._numConta;
    }

        public set numConta(numConta:number){
        this._numConta = numConta;
        }
        

    }
