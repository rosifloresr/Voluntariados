import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm'
import { Postulacion } from '../postulaciones/postulacion.entity'

@Entity()
export class Voluntariado {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    nombre!: string

    @Column()
    descripcion!: string

    @Column()
    ubicacion!: string

    @Column({ default: true })
    estado!: boolean

    @CreateDateColumn()
    createdAt!: Date

    @OneToMany(() => Postulacion, p => p.voluntariado)
    postulaciones!: Postulacion[]
}