import { getCustomRepository } from 'typeorm';
import { Product } from '../Entity/Users';
import { ProductRepository } from '../repository/UsersRepository';


interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

class CreateProductService {
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new Error('There is already one product with this name');
    }

    const productCreate = productsRepository.create({
      name,
      price,
      quantity,
    });

    const product = await productsRepository.save(productCreate);

    return product;
  }
}

export {CreateProductService}