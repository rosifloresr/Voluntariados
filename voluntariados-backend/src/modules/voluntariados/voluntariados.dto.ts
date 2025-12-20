import { IsBoolean, IsOptional, IsString } from 'class-validator'

export class CreateVoluntariadoDTO {
    @IsString()
    nombre!: string

    @IsString()
    descripcion!: string

    @IsString()
    ubicacion!: string

    @IsOptional()
    @IsBoolean()
    estado?: boolean
}