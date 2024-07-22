export interface IAnimal{
    nome: string;
    raca: string;
    idade: Date;
    sexo: Sexo;
    porte: Porte;
    castrado: boolean;
    vacinas: string;
    ativo: boolean;
    fotos: string[];
    dataAnuncio: Date;
    status: Status;
    telefone: string;
    motivoReprovacao: string;
    dataAvaliacao: Date;
}

export enum Sexo{
    MACHO = 'MACHO',
    FEMEA = 'FEMEA',
}

export enum Porte{
    PEQUENO_ATE_10_KG = 'PEQUENO (ATÉ 10 QUILOS)',
    MÉDIO_ATE_15_KG = 'PEQUENO (ATÉ 15 QUILOS)',
    GRANDE_ATE_20_KG = 'PEQUENO (ATÉ 20 QUILOS)',
    GIGANTE_ATE_25_KG = 'PEQUENO (ATÉ 25 QUILOS)',

}

export enum Status{
    PENDENTE = 'PENDENTE',
    APROVADO = 'APROVADO',
    REPROVADO = 'REPROVADO',
    FINALIZADO = 'FINALIZADO',

}
