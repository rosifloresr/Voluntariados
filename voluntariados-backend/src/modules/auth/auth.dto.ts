import { IsEmail, IsString, MinLength } from 'class-validator'

export class RegisterDTO {
    @IsString()
    name!: string

    @IsEmail()
    email!: string

    @MinLength(6)
    password!: string
}

export class LoginDTO {
    @IsEmail()
    email!: string

    @IsString()
    password!: string
}