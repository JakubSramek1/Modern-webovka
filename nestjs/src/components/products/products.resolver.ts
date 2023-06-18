import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { NewProductInput } from './dto/new-product.input';
import { Product } from './entities/product';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query((returns) => [Product])
  public async products(): Promise<Product[]> {
    return await this.productsService.getAllProducts().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Product)
  public async addNewProduct(
    @Args('newProductData') newProductData: NewProductInput,
  ): Promise<Product> {
    return await this.productsService.addProduct(newProductData).catch((err) => {
      throw err;
    });
  }
}
