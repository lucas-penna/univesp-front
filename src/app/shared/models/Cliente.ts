import { TipoPessoa } from "./TipoPessoa";

export class Cliente {
    id?: number;
    nome?: string;
    telefone?: string;
    email?: string;
    cpfcnpj?: string;
    tipoPessoa?: TipoPessoa;
}