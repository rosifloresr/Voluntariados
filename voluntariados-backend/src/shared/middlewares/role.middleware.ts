import { Request, Response, NextFunction } from 'express'

export const roleMiddleware = (role: string) => (req: any, _res: Response, next: NextFunction) => {
    if (req.user.role !== role) throw new Error('Forbidden')
    next()
}