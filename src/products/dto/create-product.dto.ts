import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Mouse Logitech G Pro',
    description: 'Nombre del producto',
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: 'Mouse inalámbrico para gaming',
    description: 'Descripción del producto',
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    example: 85000,
    description: 'Precio del producto',
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  price!: number;

  @ApiProperty({
    example: 15,
    description: 'Cantidad disponible en stock',
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  stock!: number;
}
