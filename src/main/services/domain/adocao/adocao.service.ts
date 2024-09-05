import { IRepository } from "../../../../modules/repository/repository.interface";

export class AdocaoService implements IRepository<AdocaoService>{
    
    recuperarPorId(id: number): Promise<AdocaoService | null> {
        throw new Error("Method not implemented.");
    }
    recuperarTodos(): Promise<AdocaoService[]> {
        throw new Error("Method not implemented.");
    }
    existe(id: number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    inserir(entity: AdocaoService): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: number, entity: AdocaoService): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}