import { AuthService } from '../../modules/auth/auth.service'
import { VoluntariadoService } from '../../modules/voluntariados/voluntariado.service'
import { PostulacionService } from '../../modules/postulaciones/postulacion.service'
import { AppDataSource } from '../../config/database'

describe('Postulacion integration', () => {
    const authService = new AuthService()
    const voluntariadoService = new VoluntariadoService()
    const postulacionService = new PostulacionService()
    
    let userId: string
    let voluntariadoId: string

    beforeAll(async () => {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize()
        }

        const user = await authService.register({
            name: 'Postu',
            email: 'postu@int.com',
            password: '123456',
        })

        const v = await voluntariadoService.create({
            nombre: 'Vol Int',
            descripcion: 'Desc',
            ubicacion: 'SL',
        })

        userId = user.id
        voluntariadoId = v.id

    })

    it('crea postulación completa', async () => {
        const p = await postulacionService.create(userId, voluntariadoId)
        expect(p.estado).toBe('PENDIENTE')
    })
})