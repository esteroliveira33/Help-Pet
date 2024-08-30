export interface IAdocao{
    disponibilidade: string;
    motivoAdocao: string;
    dataAvaliacao: Date;
    status: Status;
    motivoReprovacao: string;
    doacaoEfetivada: boolean;
}

export enum Status{
    APROVADO = 'APROVADO',
    REPROVADO = 'REPROVADO',
}