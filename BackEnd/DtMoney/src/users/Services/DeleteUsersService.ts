import { getCustomRepository } from 'typeorm';
import { Product } from '../Entity/Users';
import { ProductRepository } from '../repository/UsersRepository';

interface  IRequest{
  id: string
}

class DeleteProductService {
  public async execute({id} : IRequest): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id)

    if (!product){
        throw Error(' Produto not found')
    }

    await productsRepository.remove(product)
    
  }
}

export {DeleteProductService}