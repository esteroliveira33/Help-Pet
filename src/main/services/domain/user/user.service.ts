import { Request, Response } from "express";
import { IUser } from "../../../../modules/domain/user/user.interface";
import { User } from "../../../../modules/domain/user/user.entity";
import { dataSource } from "../../../../database/database.config";

class UserService {
  public async criarUsuario(req: Request, res: Response) {
    let { nome, email, senha, cidade, estado, telefone, renda, tipo }: IUser =
      req.body;

    const user: User = User.criarUsuario({
      nome,
      email,
      senha,
      cidade,
      estado,
      telefone,
      renda,
      tipo,
    });

    try {
      const usuario = await dataSource.getRepository(User).save(user);
      res.status(200).json({ usuario });
    } catch (error: any) {
      res.json({ error });
    }
  }

  public async recuperarPorId(req: Request, res: Response) {
    let { id } = req.body;
    try {
      const usuario = await dataSource
        .getRepository(User)
        .findOne({ where: [id] });
      res.status(200).json(usuario);
    } catch (error) {
      res.json({ error });
    }
  }

  public async recuperarTodos(req: Request, res: Response) {
    try {
      const usuarios = await dataSource.getRepository(User).find();
      res.status(200).json(usuarios);
    } catch (error: any) {
      res.json(error);
    }
  }
}

export const userService = new UserService();
