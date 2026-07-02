import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { RegisterUserDto } from '../users/dto/register-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async register(registerUserDto: RegisterUserDto) {
    return this.usersService.create(registerUserDto);
  }

  async registerAdmin(createUserDto: CreateUserDto, adminSecret: string) {
    const expectedSecret = process.env.ADMIN_SECRET;

    if (!adminSecret || adminSecret !== expectedSecret) {
      throw new UnauthorizedException('Invalid admin secret');
    }

    return this.usersService.create({ ...createUserDto, role: 'admin' });
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email, true);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user._id.toString(),
      email: user.email,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
