import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm'
import { User } from '../users/user.entity'
import { Voluntariado } from '../voluntariados/voluntariado.entity'

@Entity()
export class Postulacion {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @ManyToOne(() => User, u => u.postulaciones)
    user!: User

    @ManyToOne(() => Voluntariado, v => v.postulaciones)
    voluntariado!: Voluntariado

    @Column({ default: 'PENDIENTE' })
    estado!: 'PENDIENTE' | 'ACEPTADA' | 'RECHAZADA'

    @CreateDateColumn()
    createdAt!: Date
}