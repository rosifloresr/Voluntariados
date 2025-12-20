import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { env } from './env'
import { User } from '../modules/users/user.entity'
import { Voluntariado } from '../modules/voluntariados/voluntariado.entity'
import { Postulacion } from '../modules/postulaciones/postulacion.entity'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    synchronize: true,
    entities: [User, Voluntariado, Postulacion],
})