import { VoluntariadoService } from '../../modules/voluntariados/voluntariado.service'
import { AppDataSource } from '../../config/database'

describe('Voluntariado integration', () => {
    const service = new VoluntariadoService()
    
    beforeAll(async () => {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize()
        }
    })

    it('crea y lista voluntariados', async () => {
        await service.create({
            nombre: 'Integración',
            descripcion: 'Test',
            ubicacion: 'SL',
    })

        const list = await service.findAll({})
        expect(list.length).toBeGreaterThan(0)
    })
})