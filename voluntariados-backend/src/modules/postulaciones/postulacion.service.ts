import { AppDataSource } from '../../config/database'
import { Postulacion } from './postulacion.entity'
import { Voluntariado } from '../voluntariados/voluntariado.entity'
import { ApiError } from '../../shared/errors/ApiError'

export class PostulacionService {
    private repo = AppDataSource.getRepository(Postulacion)
    private voluntariadoRepo = AppDataSource.getRepository(Voluntariado)

    async create(userId: string, voluntariadoId: string) {
        const v = await this.voluntariadoRepo.findOneBy({ id: voluntariadoId })
        if (!v || !v.estado) throw new ApiError(400, 'Voluntariado no disponible')

        const p = this.repo.create({ user: { id: userId } as any, voluntariado: v })
        return this.repo.save(p)
    }

    mine(userId: string) {
        return this.repo.find({ where: { user: { id: userId } }, relations: ['voluntariado'] })
    }

    async updateEstado(id: string, estado: 'ACEPTADA' | 'RECHAZADA') {
        const p = await this.repo.findOneBy({ id })
        if (!p) throw new ApiError(404, 'Postulación no encontrada')
        p.estado = estado
        return this.repo.save(p)
    }
}