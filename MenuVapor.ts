import read from 'readline-sync'
import { colors } from './src/util/Colors'
import { JogoController } from './src/controller/JogoController'
import { Loja } from './src/model/Loja'
import { Biblioteca } from './src/model/Biblioteca'

let usuario:string;
let opcao,saldo:number;
let control=new JogoController();


let j1:Loja=new Loja(control.gerarNumeroLoja(), "Cyberpunk 2077", 200.00)
control.cadastrarJogo(j1)
let j2:Loja=new Loja(control.gerarNumeroLoja(), "God of War", 180.00)
control.cadastrarJogo(j2)
let j3:Loja=new Loja(control.gerarNumeroLoja(), "FIFA 24", 250.00)
control.cadastrarJogo(j3)
let j4:Loja=new Loja(control.gerarNumeroLoja(), "Elden Ring", 220.00)
control.cadastrarJogo(j4)

let b1:Biblioteca=new Biblioteca(control.gerarNumeroBiblioteca(), "Formula 1", 2)
control.adicionarJogo(b1)


export function main(){
        while (true) {
        console.log(colors.bg.blue,colors.fg.white,"\n*****************************************************");
        console.log("                                                     ");
        console.log("                    Vapor Jogos                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Visualizar Conta                     ");
        console.log("            2 - Atualizar Dados da Conta             ");
        console.log("            3 - Adicionar Jogo não Vapor             ");
        console.log("            4 - Listar jogos da biblioteca           ");
        console.log("            5 - Comprar jogo                         ");
        console.log("            6 - Adicionar Saldo                      ");
        console.log("            7 - Sair                                 ");
        console.log("                                                     ");
        console.log("****************************************************",colors.reset);

        console.log("Entre com a opção desejada: ");

        opcao = read.questionInt(``);
        if (opcao == 7) {
            console.log(colors.fg.cyanstrong,"\nVapor Jogos - Salvo na nuvem!");
            sobre();
            console.log(colors.reset,``);
            process.exit(0);
        }
            
            switch (opcao) {
            case 1:
                control.visualizarConta()
                keyPress()
            break;

            case 2:
                console.log(`\nAtualizar usuario da Conta`)
                usuario=read.question(`Digite seu novo nome de usuario: `);
                control.mudarUsuario(usuario)
                keyPress()
            break;

            case 3:
                console.log(`\nAdicionar jogo ao Vapor`)
                let nomeJogo=read.question(`\nInsira o nome do jogo:`);

                let b:Biblioteca=new Biblioteca(control.gerarNumeroBiblioteca(), nomeJogo, 0)
                control.adicionarJogo(b)
                keyPress();
            break;
            case 4:
                control.listarJogosBiblioteca()
                keyPress();
            break;

            case 5:
                console.log(`\nEscolha um dos jogos abaixo para comprar:`)
                control.listarJogosLoja()
                console.log(`Digite o numero do jogo: `)
                let numeroJogo=read.questionInt(``);
                control.comprar(numeroJogo);
                keyPress();
            break;

            case 6:
                console.log(`\nAdicione Saldo!`)
                control.visualizarConta()
                let add=read.questionFloat(`\nInsira valor a ser adicionado: `)
                console.log(`Seu novo Saldo e: `)
                control.addSaldo(add)
                keyPress();
            break;
            default:
                console.log(colors.fg.greenstrong,"\nOpção Inválida!\n",colors.reset);
            break
        }
    }            
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Rafael Selles - rafa_sant10@hotmail.com");
    console.log("https://github.com/Rselless");
    console.log("*****************************************************");
}
function keyPress(): void {
    console.log(colors.reset, ``);
    console.log("\nPressione enter para continuar...");
    read.prompt();
}
main();
