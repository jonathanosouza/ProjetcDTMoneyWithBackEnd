import { getCustomRepository } from 'typeorm';
import { Product } from '../Entity/Product';

import { ProductRepository } from '../repository/ProductsRepository';


class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);
    const products = productsRepository.find()
    return products;
  }
}

export {ListProductService}