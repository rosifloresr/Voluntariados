import { PostulacionService } from '../../../src/modules/postulaciones/postulacion.service'
import { ApiError } from '../../../src/shared/errors/ApiError'
import { AppDataSource } from '../../../src/config/database'
import { Postulacion } from '../../../src/modules/postulaciones/postulacion.entity'
import { Voluntariado } from '../../../src/modules/voluntariados/voluntariado.entity'

jest.mock('../../../src/config/database', () => {
  const postulacionRepo = {
    create: jest.fn(),
    save: jest.fn(),
    findOneBy: jest.fn(),
  }

  const voluntariadoRepo = {
    findOneBy: jest.fn(),
  }

  return {
    AppDataSource: {
      getRepository: (entity: any) => {
        if (entity === Postulacion) return postulacionRepo
        if (entity === Voluntariado) return voluntariadoRepo
      },
    },
  }
})

describe('PostulacionService (unit)', () => {
  let service: PostulacionService
  let postulacionRepo: any
  let voluntariadoRepo: any

  beforeEach(() => {
    service = new PostulacionService()
    postulacionRepo = AppDataSource.getRepository(Postulacion)
    voluntariadoRepo = AppDataSource.getRepository(Voluntariado)

    jest.clearAllMocks()
  })

  it('crea una postulación en estado PENDIENTE', async () => {
    voluntariadoRepo.findOneBy.mockResolvedValue({
      id: 'v1',
      estado: true,
    })

    postulacionRepo.create.mockReturnValue({
      id: 'p1',
      estado: 'PENDIENTE',
    })

    postulacionRepo.save.mockResolvedValue({
      id: 'p1',
      estado: 'PENDIENTE',
    })

    const result = await service.create('user-1', 'v1')

    expect(result.estado).toBe('PENDIENTE')
    expect(postulacionRepo.create).toHaveBeenCalled()
    expect(postulacionRepo.save).toHaveBeenCalled()
  })

  it('lanza error si el voluntariado está inactivo', async () => {
    voluntariadoRepo.findOneBy.mockResolvedValue({
      id: 'v1',
      estado: false,
    })

    await expect(
      service.create('user-1', 'v1')
    ).rejects.toBeInstanceOf(ApiError)
  })

  it('actualiza el estado de la postulación', async () => {
    postulacionRepo.findOneBy.mockResolvedValue({
      id: 'p1',
      estado: 'PENDIENTE',
    })

    postulacionRepo.save.mockResolvedValue({
      id: 'p1',
      estado: 'ACEPTADA',
    })

    const result = await service.updateEstado('p1', 'ACEPTADA')

    expect(result.estado).toBe('ACEPTADA')
    expect(postulacionRepo.save).toHaveBeenCalled()
  })
})
