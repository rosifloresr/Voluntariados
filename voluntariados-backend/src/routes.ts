import { Router } from 'express'
import { AuthController } from './modules/auth/auth.controller'
import { VoluntariadoService } from './modules/voluntariados/voluntariado.service'
import { PostulacionService } from './modules/postulaciones/postulacion.service'
import { authMiddleware } from './shared/middlewares/auth.middleware'
import { roleMiddleware } from './shared/middlewares/role.middleware'

export const routes = Router()

const auth = new AuthController()
const voluntariados = new VoluntariadoService()
const postulaciones = new PostulacionService()

routes.post('/auth/register', auth.register)
routes.post('/auth/login', auth.login)

routes.get('/voluntariados', authMiddleware, (req, res) => res.json(voluntariados.findAll(req.query)))
routes.post('/voluntariados', authMiddleware, roleMiddleware('ADMIN'), async (req, res) => res.json(await voluntariados.create(req.body)))
routes.put('/voluntariados/:id', authMiddleware, roleMiddleware('ADMIN'), async (req, res) => res.json(await voluntariados.update(req.params.id, req.body)))
routes.delete('/voluntariados/:id', authMiddleware, roleMiddleware('ADMIN'), async (req, res) => res.json(await voluntariados.remove(req.params.id)))

routes.post('/postulaciones', authMiddleware, roleMiddleware('USER'), async (req: any, res) => res.json(await postulaciones.create(req.user.id, req.body.voluntariadoId)))
routes.get('/postulaciones/mias', authMiddleware, roleMiddleware('USER'), async (req: any, res) => res.json(await postulaciones.mine(req.user.id)))
routes.put('/postulaciones/:id/estado', authMiddleware, roleMiddleware('ADMIN'), async (req, res) => res.json(await postulaciones.updateEstado(req.params.id, req.body.estado)))