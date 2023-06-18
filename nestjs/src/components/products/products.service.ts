import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewProductInput } from './dto/new-product.input';
import { Product } from './entities/product';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

  public async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async addProduct(newProductData: NewProductInput): Promise<Product> {
    const newProduct = this.productRepository.create(newProductData);
    await this.productRepository.save(newProduct).catch((err) => {
      new InternalServerErrorException();
    });

    return newProduct;
  }
}
