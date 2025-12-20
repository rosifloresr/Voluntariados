import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../errors/ApiError'

export function errorMiddleware(err: any, _req: Request, res: Response, _next: NextFunction) {
    if (err instanceof ApiError) return res.status(err.status).json({ message: err.message })
    res.status(500).json({ message: err.message || 'Internal error' })
}