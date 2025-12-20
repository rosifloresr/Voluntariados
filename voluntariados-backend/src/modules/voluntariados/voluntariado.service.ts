import { AppDataSource } from '../../config/database'
import { Voluntariado } from './voluntariado.entity'
import { CreateVoluntariadoDTO } from './voluntariados.dto'
import { ApiError } from '../../shared/errors/ApiError'

export class VoluntariadoService {
    private repo = AppDataSource.getRepository(Voluntariado)

    findAll(filters: any) {
        return this.repo.find({ where: filters })
    }

    async create(data: CreateVoluntariadoDTO) {
        const v = this.repo.create(data)
        return this.repo.save(v)
    }

    async update(id: string, data: Partial<CreateVoluntariadoDTO>) {
        const v = await this.repo.findOneBy({ id })
        if (!v) throw new ApiError(404, 'Voluntariado no encontrado')
        Object.assign(v, data)
        return this.repo.save(v)
    }

    async remove(id: string) {
        const v = await this.repo.findOneBy({ id })
        if (!v) throw new ApiError(404, 'Voluntariado no encontrado')
        await this.repo.remove(v)
    }
}