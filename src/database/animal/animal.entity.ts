import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Porte, Sexo } from "../../modules/domain/animal/animal.interface";
import { Status } from "../../modules/domain/adocao/adocao.interface";

@Entity({name: 'animal'})
export class Animal{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    raca: string;

    @Column()
    idade: Date;

    @Column({type: 'enum', enum: Sexo, name: 'sexo'})
    sexo: Sexo;

    @Column({type: 'enum', enum: Porte, name: 'porte'})
    porte: Porte;

    @Column()
    cadastro: boolean;

    @Column()
    vacinas: string;

    @Column()
    ativo: boolean;

    @Column()
    fotos: string;

    @Column({name: 'data_anuncio'})
    dataAnuncio: Date;

    @Column({type: 'enum', enum: Status, name: 'status'})
    status: Status;

    @Column()
    telefone: string;

    @Column({name: 'motivo_reprovacao'})
    motivoReprovacao: string;

    @Column({name: 'data_avaliacao'})
    dataAvaliacao: Date;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date;

    constructor(animal: Partial<Animal>){
        Object.assign(this, animal);
    }

}