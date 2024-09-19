import { DataSource } from "typeorm";
import { dataSource } from "../../../../database/database.config";
import { Adocao } from "../../../../modules/domain/adocao/adocao.entity";
import { IRepository } from "../../../../modules/repository/repository.interface";
import { Request, Response } from "express";

class AdocaoService {
  public criarAdocao(req: Request, res: Response) {
    res.json("Pagina inicial");
    let {
      disponibilidade,
      motivoAdocao,
      dataAvaliacao,
      status,
      motivoReprovacao,
      doacaoEfetivada,
    }: Adocao = req.body;

     const adocao: Adocao = Adocao.criarAdocao({
       disponibilidade,
       motivoAdocao,
       dataAvaliacao,
       status,
       motivoReprovacao,
       doacaoEfetivada,
     });

     try{
      const adocao = await dataSource.getRepository(Adocao).save(adocao);
      res.status(200).json({adocao});
     }catch (error: any){
      res.json({error});
     }
  }

   
  
}

export const adocaoService = new AdocaoService();
