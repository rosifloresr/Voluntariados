import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'

export function authMiddleware(req: any, _res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) throw new Error('Unauthorized')
    req.user = verifyToken(token)
    next()
}