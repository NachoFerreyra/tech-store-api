import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findAll() {
    return [
      {
        id: 1,
        name: 'Mouse Gamer',
        price: 15000,
      },
      {
        id: 2,
        name: 'Teclado Mecánico',
        price: 35000,
      },
    ];
  }
}
