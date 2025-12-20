import { VoluntariadoService } from '../../modules/voluntariados/voluntariado.service'
import { AppDataSource } from '../../config/database'

describe('VoluntariadoService (unit)', () => {
    const service = new VoluntariadoService()

    beforeAll(async () => {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize()
        }
    })

    it('crea un voluntariado', async () => {
        const v = await service.create({
            nombre: 'Ayuda Social',
            descripcion: 'Test',
            ubicacion: 'San Luis',
        })
        expect(v.id).toBeDefined()
    })

    it('actualiza un voluntariado', async () => {
        const v = await service.create({
            nombre: 'Original',
            descripcion: 'Desc',
            ubicacion: 'SL',
        })

        const updated = await service.update(v.id, { nombre: 'Actualizado' })
        expect(updated.nombre).toBe('Actualizado')
    })
})