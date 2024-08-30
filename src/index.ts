import { User } from "./modules/domain/user/user.entity";
import { IUser, TiposDeUsuarios } from "./modules/domain/user/user.interface";
import { UserDto } from "./modules/shared/user_dto/user.dto";

let nome: string;
let email: string;

const user: IUser = {
    nome: 'Raissia',
    email: "raissia@gmail.com",
    senha: "123456",
    estado: "Sergipe",
    cidade: "Tobias",
    renda: 16.784,
    telefone: "7999655784",
    tipo: TiposDeUsuarios.ADOTANTE
} 

let exibirNome = function (): string {
    return (`O nome é: ${user.nome}`);
}
const novousuario = User.criarUsuario(user);

const userDto = UserDto.userDto(novousuario);

console.log(userDto);
console.log(exibirNome());