import { DataSource } from "typeorm";
import { dataSource } from "../../../../database/database.config";
import { Adocao } from "../../../../modules/domain/adocao/adocao.entity";
import { IRepository } from "../../../../modules/repository/repository.interface";
import { Request, Response } from "express";

class AdocaoService {
  public criarAdocao(req: Request, res: Response) {
    res.json("Pagina inicial");
  }
}

export const adocaoService = new AdocaoService();
