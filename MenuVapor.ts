import read from 'readline-sync'
import { colors } from './src/util/Colors'
import { Jogo } from './src/model/Jogo'
import { Comprar} from './src/model/Comprar'
import { Presente } from './src/model/Presente'
import { JogoController } from './src/controller/JogoController'

let opcao:number=0

export function main(){
        while (true) {
        console.log(colors.bg.blue,colors.fg.white,"\n*****************************************************");
        console.log("                                                     ");
        console.log("                    Vapor Jogos                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Atualizar Dados da Conta             ");
        console.log("            3 - Buscar jogo por numero               ");
        console.log("            4 - Listar todos os jogos                ");
        console.log("            5 - Apagar Jogo da Biblioteca            ");
        console.log("            6 - Comprar jogo                         ");
        console.log("            7 - Adicionar Saldo                      ");
        console.log("            8 - Presentear Jogos                     ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("****************************************************",colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = read.questionInt(``);

        if (opcao == 9) {
            console.log(colors.fg.cyanstrong,"\nVapor Jogos - Salvo na nuvem!");
            sobre();
            console.log(colors.reset,``);
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                keyPress()
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
            default:
                console.log(colors.fg.greenstrong,"\nOpção Inválida!\n",colors.reset);
                break}
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
