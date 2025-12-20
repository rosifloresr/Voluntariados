import { AuthService } from '../../modules/auth/auth.service'
import { AppDataSource } from '../../config/database'

describe('Auth integration', () => {
    const service = new AuthService()
    
    beforeAll(async () => {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize()
        }
    })

    it('registra y loguea usuario', async () => {
        await service.register({
            name: 'Integration',
            email: 'integration@mail.com',
            password: '123456',
        })
    const token = await service.login({
    email: 'integration@mail.com',
    password: '123456',
    })
    
    expect(token).toBeDefined()
    })
})