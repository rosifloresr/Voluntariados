import { AuthService } from '../../modules/auth/auth.service'
import { AppDataSource } from '../../config/database'

describe('AuthService (unit)', () => {
    const service = new AuthService()

    it('registra un usuario', async () => {
        const user = await service.register({
            name: 'Test',
            email: 'test@mail.com',
            password: '123456',
    })

    expect(user.id).toBeDefined()
    expect(user.email).toBe('test@mail.com')
    })
})