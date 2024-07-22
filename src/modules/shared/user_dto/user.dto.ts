import { User } from "../../domain/user/user.entity";
import { IUser } from "../../domain/user/user.interface";

export class UserDto{
    public static userDto(user: User): IUser{
        return {
            nome: user.nome,
            email: user.email,
            senha: user.senha,
            estado: user.estado,
            cidade: user.cidade,
            renda: user.renda,
            telefone: user.telefone,
            tipo: user.tipo
        }
    }
}