import { IsEnum, IsUUID } from 'class-validator'

export class CreatePostulacionDTO {
    @IsUUID()
    voluntariadoId!: string
}

export class UpdateEstadoPostulacionDTO {
    @IsEnum(['ACEPTADA', 'RECHAZADA'])
    estado!: 'ACEPTADA' | 'RECHAZADA'
}