import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TiposDeUsuarios } from "../../modules/domain/user/user.interface";
import * as bcrypt from 'bcrypt';

@Entity({name: 'users'})
export class User{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column({type: 'enum', enum: TiposDeUsuarios, name: 'tipo_de_usuario'})
    tipoDeUsuario: TiposDeUsuarios;

    @Column()
    estado: string;

    @Column()
    cidade: string;

    @Column()
    renda: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date;

    constructor(user: Partial<User>){
        Object.assign(this, user);
    }

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void>{
        const salt = await bcrypt.genSalt();
        this.senha = await bcrypt.hash(this.senha, salt)
    }
}