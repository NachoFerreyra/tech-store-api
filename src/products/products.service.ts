import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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

  async create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto, {
      returnDocument: 'after',
      runValidators: true,
    });
  }

  async remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
