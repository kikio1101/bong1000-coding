import { Product } from './entities/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}

  async create(createProductDto: CreateProductDto) {
    const product = this.repo.create(createProductDto);
    return this.repo.save(product);
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.repo.update(id, updateProductDto);
  }

  async remove(id: number) {
    return this.repo.delete(id);
  }
}
