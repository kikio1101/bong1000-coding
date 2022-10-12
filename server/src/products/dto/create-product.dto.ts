import { IsString, IsEnum, IsInt } from 'class-validator';
import { ClothingType } from '../entities/product.entity';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsEnum(ClothingType)
  type: ClothingType;

  @IsString()
  color: string;

  @IsInt()
  price: number;
}
