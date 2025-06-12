import { Conta } from "../model/Conta";
import { Jogo } from "../model/Jogo";

export interface JogoRepository{
	visualizarConta(): void 
	listarJogosLoja(): void;
	listarJogosBiblioteca(): void;
	cadastrarJogo(jogo: Jogo): void;
	adicionarJogo(jogo: Jogo): void
}