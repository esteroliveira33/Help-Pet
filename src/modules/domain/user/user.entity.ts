import { IUser, TiposDeUsuarios } from "./user.interface";

export class User implements IUser{
    private _nome: string;
    private _email: string;
    private _senha: string;
    private _tipo: TiposDeUsuarios;
    private _estado: string;
    private _cidade: string;
    private _telefone: string;
    private _renda: number;

    public get nome(): string {
        return this._nome;
    }
    private set nome(nome: string) {
        this._nome = nome;
    }

    public get email(): string {
        return this._email;
    }
    private set email(email: string) {
        this._email = email;
    }

    public get senha(): string {
        return this._senha;
    }
    private set senha(senha: string) {
        this._senha = senha;
    }

    public get tipo(): TiposDeUsuarios {
        return this._tipo;
    }
    private set tipo(tipo: TiposDeUsuarios) {
        this._tipo = tipo;
    }

    public get estado(): string {
        return this._estado;
    }
    private set estado(estado: string) {
        this._estado = estado;
    }

    public get cidade(): string {
        return this._cidade;
    }
    private set cidade(cidade: string) {
        this._cidade = cidade;
    }

    public get telefone(): string {
        return this._telefone;
    }
    private set telefone(telefone: string) {
        this._telefone = telefone;
    }

    public get renda(): number {
        return this._renda;
    }
    private set renda(renda: number) {
        this._renda = renda;
    }

    private constructor(user: IUser){
        this.nome = user.nome;
        this.email = user.email;
        this.senha = user.senha;
        this.cidade = user.cidade;
        this.estado = user.estado;
        this.telefone = user.telefone;
        this.renda = user.renda;
        this.tipo = user.tipo;
    }

    public static criarUsuario(user: IUser): User{
        return new User(user);
    }
}