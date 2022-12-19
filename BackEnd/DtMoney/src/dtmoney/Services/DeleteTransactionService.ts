import { getCustomRepository } from 'typeorm';
import { Transaction } from '../Entity/Transaction';
import { TransactionRepository } from '../repository/TransactionRepository';

interface  IRequest{
  id: string
}

class DeleteTransactionService {
  public async execute({id} : IRequest): Promise<void> {
    const productsRepository = getCustomRepository(TransactionRepository);
    const product = await productsRepository.findOne(id)

    if (!product){
        throw Error(' Produto not found')
    }

    await productsRepository.remove(product)
    
  }
}

export {DeleteTransactionService}