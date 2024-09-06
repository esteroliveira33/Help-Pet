import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Status } from "../../modules/domain/adocao/adocao.interface";

@Entity({name: 'adocao'})
export class Adocao{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    disponibilidade: string;

    @Column({name: 'motivo_adocao'})
    motivoAdocao: string;

    @Column({name: 'data_avaliacao'})
    dataAvaliacao: Date;

    @Column({type: 'enum', enum: Status, name: 'status'})
    status: Status;

    @Column({name: 'motivo_reprovacao'})
    motivoReprovacao: string;

    @Column({name: 'doacao_efetivada'})
    doacaoEfetivada: boolean;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date;

    constructor(adocao: Partial<Adocao>){
        Object.assign(this, adocao);
    }
}