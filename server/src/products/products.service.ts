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

  // sqlite에서 삭제된 데이터의 시퀀스가 남아있어 AUTO_INCREMENT 사용시 인덱스가 초기화가 안되는 문제 해결
  resetSequence = async () => {
    const reponse = await this.findAll();
    if (reponse?.length === 0) {
      await this.repo.query(
        'UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = "product"',
      );
    }
  };

  async delete(id: number) {
    const excute = this.repo.delete(id);

    excute.then(() => {
      this.resetSequence();
    });

    return excute;
  }
}
