import { Jogo } from "../model/Jogo";
import { Conta } from "../model/Conta";
import { JogoRepository } from "../repository/JogoRepository";
import { colors } from "../util/Colors";
import { Carrinhho } from "../model/Carrinho";
import { Loja } from "../model/Loja";

export class JogoController implements JogoRepository{
    private conta:Conta=new Conta(`joao`,500.00, 1);
    private listaLoja:Array<Jogo>=new Array<Jogo>();
    private listaBiblioteca:Array<Jogo>=new Array<Jogo>();
    numero:number=0

    visualizarConta(): void {
        this.conta.visualizar()
    }

	listarJogosLoja(): void {
        if (this.listaLoja.length===0){
            throw new Error(`A loja nao possui jogos disponiveis!`)
        }else {            
        for (let jogo of this.listaLoja){
            jogo.visualizar()
        }
            };
    }

    listarJogosBiblioteca(): void {
        for (let jogo of this.listaBiblioteca){
            jogo.visualizar()
        };
    }

    cadastrarJogo(jogo:Jogo): void{
        this.listaLoja.push(jogo);
        console.log(colors.fg.cyanstrong,`\nO Jogo: ${jogo.nome} foi criado com sucesso!`,colors.reset); 
    }

    adicionarJogo(jogo:Jogo): void{
        this.listaBiblioteca.push(jogo);
        console.log(colors.fg.cyanstrong,`\nO Jogo: ${jogo.nome} foi adicionado a biblioteca!`,colors.reset); 
    }

    public buscarJogoLoja(numero:number): Jogo|null {
        for(let jogo of this.listaLoja){
            if(jogo.numero === numero) {
                return jogo
            }
        } return null;
    }

    public gerarNumeroLoja():number{
        let num = this.listaLoja.length+1;
        return num++;
    }
        
    public gerarNumeroBiblioteca():number{
        let num = this.listaBiblioteca.length + 1;
        return num++;
    }

    public comprar(numeroJogo: number): void {
        const jogo = this.buscarJogoLoja(numeroJogo) as Loja
        
        const carrinho = new Carrinhho(jogo, this.conta)
        const novoSaldo = carrinho.comprarJogo()
        if (novoSaldo<this.conta.saldo){
        this.conta.saldo = novoSaldo as number
        this.adicionarJogo(jogo)
        this.removerJogoLoja(numeroJogo)
        }
    }
    
    public removerJogoLoja(numero:number): void{
        this.listaLoja.splice(numero-1,1)
        let i=0;
        for(let jogo of this.listaLoja){
            jogo.numero=i+1
            i++
        }
    }
    public mudarUsuario(novoUsuario:string): void{
        this.conta.novouser(novoUsuario)
        console.log(`Seu novo usuario e ${this.conta.usuario}`)
        return this.conta.visualizar()
    }

    public addSaldo(adicionado:number): void{
        const soma=this.conta.saldo+adicionado
        this.conta.addSaldo(soma)
        this.visualizarConta()
        }
}