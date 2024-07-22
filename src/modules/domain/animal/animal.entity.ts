import { IAnimal, Porte, Sexo, Status } from "./animal.interface";

export class Animal implements IAnimal{
    private _nome: string;
    private _raca: string;
    private _idade: Date;
    private _sexo: Sexo;
    private _porte: Porte;
    private _castrado: boolean;
    private _vacinas: string;
    private _ativo: boolean;
    private _fotos: string[];
    private _dataAnuncio: Date;
    private _status: Status;
    private _telefone: string;
    private _motivoReprovacao: string;
    private _dataAvaliacao: Date;

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get raca(): string {
        return this._raca;
    }
    public set raca(value: string) {
        this._raca = value;
    }

    public get idade(): Date {
        return this._idade;
    }
    public set idade(value: Date) {
        this._idade = value;
    }

    public get sexo(): Sexo {
        return this._sexo;
    }
    public set sexo(value: Sexo) {
        this._sexo = value;
    }

    public get porte(): Porte {
        return this._porte;
    }
    public set porte(value: Porte) {
        this._porte = value;
    }

    public get castrado(): boolean {
        return this._castrado;
    }
    public set castrado(value: boolean) {
        this._castrado = value;
    }

    public get vacinas(): string {
        return this._vacinas;
    }
    public set vacinas(value: string) {
        this._vacinas = value;
    }

    public get ativo(): boolean {
        return this._ativo;
    }
    public set ativo(value: boolean) {
        this._ativo = value;
    }

    public get fotos(): string[] {
        return this._fotos;
    }
    public set fotos(value: string[]) {
        this._fotos = value;
    }

    public get dataAnuncio(): Date {
        return this._dataAnuncio;
    }
    public set dataAnuncio(value: Date) {
        this._dataAnuncio = value;
    }

    public get status(): Status {
        return this._status;
    }
    public set status(value: Status) {
        this._status = value;
    }

    public get telefone(): string {
        return this._telefone;
    }
    public set telefone(value: string) {
        this._telefone = value;
    }

    public get motivoReprovacao(): string {
        return this._motivoReprovacao;
    }
    public set motivoReprovacao(value: string) {
        this._motivoReprovacao = value;
    }

    public get dataAvaliacao(): Date {
        return this._dataAvaliacao;
    }
    public set dataAvaliacao(value: Date) {
        this._dataAvaliacao = value;
    }

    private constructor(animal: IAnimal){
        this.nome = animal.nome;
        this.ativo = animal.ativo;
        this.castrado = animal.castrado;
        this.dataAnuncio = animal.dataAnuncio;
        this.dataAvaliacao = animal.dataAvaliacao;
        this.fotos = animal.fotos;
        this.idade = animal.idade;
        this.motivoReprovacao = animal.motivoReprovacao;
        this.porte = animal.porte;
        this.raca = animal.raca;
        this.sexo = animal.sexo;
        this.status = animal.status;
    }

    public static criarAnimal(animal: IAnimal): Animal{
        return new Animal(animal);
    }
}