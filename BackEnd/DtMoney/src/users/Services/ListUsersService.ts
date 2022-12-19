import { getCustomRepository } from 'typeorm';
import { Product } from '../Entity/Users';

import { ProductRepository } from '../repository/UsersRepository';


class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);
    const products = productsRepository.find()
    return products;
  }
}

export {ListProductService}