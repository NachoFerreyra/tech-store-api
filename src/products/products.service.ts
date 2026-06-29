import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Model } from 'mongoose';

import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async findAll() {
    return this.productModel.find();
  }

  async create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }
}
