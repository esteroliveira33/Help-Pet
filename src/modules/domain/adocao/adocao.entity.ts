import { IAdocao, Status } from "./adocao.interface";

export class Adocao implements IAdocao{
    private _disponibilidade: string;
    private _motivoAdocao: string;
    private _dataAvaliacao: Date;
    private _status: Status;
    private _motivoReprovacao: string;
    private _doacaoEfetivada: boolean;
    

    public get disponibilidade(): string {
        return this._disponibilidade;
    }
    public set disponibilidade(value: string) {
        this._disponibilidade = value;
    }

    public get motivoAdocao(): string {
        return this._motivoAdocao;
    }
    public set motivoAdocao(value: string) {
        this._motivoAdocao = value;
    }

    public get dataAvaliacao(): Date {
        return this._dataAvaliacao;
    }
    public set dataAvaliacao(value: Date) {
        this._dataAvaliacao = value;
    }

    public get status(): Status {
        return this._status;
    }
    public set status(value: Status) {
        this._status = value;
    }

    public get motivoReprovacao(): string {
        return this._motivoReprovacao;
    }
    public set motivoReprovacao(value: string) {
        this._motivoReprovacao = value;
    }

    public get doacaoEfetivada(): boolean {
        return this._doacaoEfetivada;
    }
    public set doacaoEfetivada(value: boolean) {
        this._doacaoEfetivada = value;
    }

    private constructor(adocao: IAdocao){
        this.dataAvaliacao = adocao.dataAvaliacao;
        this.disponibilidade = adocao.disponibilidade;
        this.doacaoEfetivada = adocao.doacaoEfetivada;
        this.motivoAdocao = adocao.motivoAdocao;
        this.motivoReprovacao = adocao.motivoReprovacao;
        this.status = adocao.status;
    }

    public static criarAdocao(adocao: IAdocao): Adocao{
        return new Adocao(adocao);
    }

    
}