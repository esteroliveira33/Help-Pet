import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tipo } from "../../modules/domain/raca/raca.interface";

@Entity({name: "raca"})
export class Raca{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({name: 'nome_raca'})
    nomeRaca: string;

    @Column({type: 'enum', enum: Tipo, name: 'tipo'})
    tipo: Tipo;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date;

    constructor(raca: Partial<Raca>){
        Object.assign(this, raca);
    }
}