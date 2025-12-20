import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Postulacion } from '../postulaciones/postulacion.entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    name!: string

    @Column({ unique: true })
    email!: string

    @Column()
    password!: string

    @Column()
    role!: 'USER' | 'ADMIN'

    @OneToMany(() => Postulacion, p => p.user)
    postulaciones!: Postulacion[]
}