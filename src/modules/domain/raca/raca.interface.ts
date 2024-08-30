export interface IRaca{
    nomeRaca: string;
    tipo: Tipo;
}

export enum Tipo{
    CACHORRO = 'CACHORRO',
    GATO = 'GATO',
}