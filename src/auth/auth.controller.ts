import { Body, Controller, Headers, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiUnauthorizedResponse,
  ApiHeader,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { RegisterUserDto } from '../users/dto/register-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiOperation({ summary: 'Registrar un nuevo usuario' })
  @ApiResponse({
    status: 201,
    description: 'Usuario registrado correctamente',
  })
  @ApiBadRequestResponse({ description: 'Datos de registro inválidos' })
  @ApiConflictResponse({ description: 'El email ya está registrado' })
  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @ApiOperation({ summary: 'Registrar un nuevo usuario administrador' })
  @ApiHeader({
    name: 'x-admin-secret',
    description: 'Clave secreta para crear cuentas de administrador',
    required: true,
  })
  @ApiResponse({
    status: 201,
    description: 'Administrador registrado correctamente',
  })
  @ApiBadRequestResponse({ description: 'Datos de registro inválidos' })
  @ApiConflictResponse({ description: 'El email ya está registrado' })
  @ApiUnauthorizedResponse({ description: 'Admin secret inválido o ausente' })
  @Post('register-admin')
  registerAdmin(
    @Body() createUserDto: CreateUserDto,
    @Headers('x-admin-secret') adminSecret: string,
  ) {
    return this.authService.registerAdmin(createUserDto, adminSecret);
  }

  @ApiOperation({ summary: 'Iniciar sesión' })
  @ApiResponse({
    status: 200,
    description: 'Login exitoso — devuelve access_token',
  })
  @ApiBadRequestResponse({ description: 'Datos de login inválidos' })
  @ApiUnauthorizedResponse({ description: 'Credenciales incorrectas' })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
