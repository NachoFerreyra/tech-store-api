import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      name: 'Tech Store API',
      version: '1.0.0',
      status: 'online',
      documentation: '/api',
      author: 'Ignacio Ferreyra',
    };
  }
}