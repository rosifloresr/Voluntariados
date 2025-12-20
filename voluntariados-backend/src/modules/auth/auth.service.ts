import { AppDataSource } from '../../config/database'
import { User } from '../users/user.entity'
import { RegisterDTO, LoginDTO } from './auth.dto'
import { hashPassword, comparePassword } from '../../shared/utils/bcrypt'
import { signToken } from '../../shared/utils/jwt'
import { ApiError } from '../../shared/errors/ApiError'

export class AuthService {
    private repo = AppDataSource.getRepository(User)

    async register(data: RegisterDTO) {
        const exists = await this.repo.findOneBy({ email: data.email })
        if (exists) throw new ApiError(400, 'Email ya registrado')

        const user = this.repo.create({
            ...data,
            role: 'USER',
            password: await hashPassword(data.password),
        })

        return this.repo.save(user)
    }

    async login(data: LoginDTO) {
        const user = await this.repo.findOneBy({ email: data.email })
        if (!user) throw new ApiError(401, 'Credenciales inválidas')

        const valid = await comparePassword(data.password, user.password)
        if (!valid) throw new ApiError(401, 'Credenciales inválidas')

        return signToken({ id: user.id, role: user.role })
    }
}