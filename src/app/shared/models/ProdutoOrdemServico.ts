import { OrdemServico } from "./OrdemServico";

export class ProdutoOrdemServico {
    id?: number;
    descricao?: String;
    quantidade?: number = 1;
    valor?: number;
    ordemServico?: OrdemServico;
}