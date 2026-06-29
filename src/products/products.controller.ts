import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({
    summary: 'Obtener todos los productos',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de productos obtenida correctamente',
  })
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @ApiOperation({
    summary: 'Obtener un producto por ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto encontrado',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @ApiOperation({
    summary: 'Crear un nuevo producto',
  })
  @ApiResponse({
    status: 201,
    description: 'Producto creado correctamente',
  })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @ApiOperation({
    summary: 'Actualizar un producto',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto actualizado correctamente',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @ApiOperation({
    summary: 'Eliminar un producto',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto eliminado correctamente',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
