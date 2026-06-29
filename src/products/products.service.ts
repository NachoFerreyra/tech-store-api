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

  async findOne(id: string) {
    return this.productModel.findById(id);
  }

  async update(id: string, updateData: Partial<CreateProductDto>) {
    return this.productModel.findByIdAndUpdate(id, updateData, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }

  async create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }
}
