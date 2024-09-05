interface IRecuperar<T>{
    recuperarPorId(id: number): Promise<T | null>;
    recuperarTodos(): Promise<Array<T>>;
    existe(id: number): Promise<Boolean>
}

interface ISalvar<T>{
    inserir(entity: T): Promise<boolean>;
    update(id:number, entity: T): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}


export interface IRepository<T> extends IRecuperar<T>, ISalvar<T> {};
