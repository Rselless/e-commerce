import { Jogo } from "../model/Jogo";
import { Conta } from "../model/Conta";
import { JogoRepository } from "../repository/JogoRepository";
import { colors } from "../util/Colors";

export class JogoController implements JogoRepository{
    private listaContas:Array<Conta>=new Array<Conta>();
    private listaJogos:Array<Jogo>=new Array<Jogo>();
    numero:number=0

    procurarPorNumero(numero: number): void{
    let buscaJogo = this.buscarJogoArray(numero);
    if (buscaJogo != null) {
        buscaJogo.visualizar();
    } else {
        console.log(colors.fg.red, `\nO Jogo numero: ${numero} nao foi encontrado!`, colors.reset);
    }
    }
	listarTodas(): void {
    for (let jogo of this.listaJogos){
        jogo.visualizar()
    }
    }
	cadastrar(conta:Conta): void{
    this.listaContas.push(conta);
    console.log(colors.fg.cyanstrong,`\nA Conta numero: ${conta.numConta} foi criada com sucesso!`,colors.reset); 
    }
	atualizar(conta: Conta): void{
    let buscaConta=this.buscarContaArray(conta.numConta)
    
    if(buscaConta!=null){
        this.listaContas[this.listaContas.indexOf(buscaConta)]=conta;
        console.log(colors.fg.blue,`\nA conta numero: ${conta.numConta} foi atualizada com sucesso!`,colors.reset)
    }else
        console.log(colors.fg.yellow,`\nA Conta numero: ${conta.numConta} nao foi encontrada!`,colors.reset)
    }

	deletar(biblioteca:string[]): void {
    let buscabiblio=this.buscarBiblio();

    if (buscabiblio!=null) {
        this.listaContas.splice(this.listaContas.indexOf(buscabiblio), 1);
        console.log(colors.fg.blue,`\nA Conta numero: ${numero} foi apagada com sucesso!`, colors.reset);
    } else
        console.log(colors.fg.yellow,`\nA Conta numero: ${numero} não foi encontrada!`, colors.reset)
    }
    comprar(usuario:string,valor: number):void{}
	
    presente(numeroOrigem: number, numeroDestino: number, valor: number): void{}

public buscarJogoArray(numero:number):Jogo|null{
    for(let jogo of this.listaJogos){
        if(jogo.numero===numero)
            return jogo;
    } return null;
}
public buscarContaArray(numero:number):Conta|null{
    for(let conta of this.listaContas){
        if(conta.numConta===numero)
            return conta;
    } return null;
}
/*public buscarBiblio(biblioteca:string[]):Conta|null{
    for(let jogo of this.listaJogos){
        if(jogo.nome===nomeJo)
            return jogo;
    } return null;
}*/
}