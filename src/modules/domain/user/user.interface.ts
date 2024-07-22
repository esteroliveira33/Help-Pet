export interface IUser{
    nome: string;
    email: string;
    senha: string;
    tipo: TiposDeUsuarios;
    estado: string;
    cidade: string;
    telefone: string;
    renda: number;
}

export enum TiposDeUsuarios{
    ADOTANTE = 'ADOTANTE',
    ADM = 'ADM',
    DOADOR = 'DOADOR'
}
