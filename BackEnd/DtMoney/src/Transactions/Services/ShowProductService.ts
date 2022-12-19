import { getCustomRepository } from 'typeorm';
import { Product } from '../Entity/Product';
import { ProductRepository } from '../repository/ProductsRepository';

interface  IRequest{
  id: string
}

class ShowProductService {
  public async execute({id} : IRequest): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id)

    if (!product){
        throw Error(' Produto not found')
    }
    return product;
  }
}

export {ShowProductService}