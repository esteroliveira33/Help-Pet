import { IRaca, Tipo} from "./raca.interface";

export  class Raca implements IRaca{
    private _nomeRaca: string;
    private _tipo: Tipo;
    
    public get nomeRaca(): string {
        return this._nomeRaca;
    }
    public set nomeRaca(value: string) {
        this._nomeRaca = value;
    }

    public get tipo(): Tipo {
        return this._tipo;
    }
    public set tipo(value: Tipo) {
        this._tipo = value;
    }

    private constructor(raca: IRaca){
        this.nomeRaca = raca.nomeRaca;
        this.tipo = raca.tipo;
    }

    public static criarRaca(raca: IRaca): Raca{
        return new Raca(raca);
    }
}