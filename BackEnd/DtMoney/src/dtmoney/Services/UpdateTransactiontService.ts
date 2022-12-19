import { getCustomRepository } from 'typeorm';
import { Transaction } from '../Entity/Transaction';
import { TransactionRepository } from '../repository/TransactionRepository';

interface  IRequest{
  id: string,
  description: string,
  price: number,
  category: string
}

class UpdateTransactionService {
  public async execute({id, description, price, category} : IRequest): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionRepository);

    const transaction = await transactionsRepository.findOne(id)

    if (!transaction){
        throw Error(' Produto not found')
    }
    
    const transactionExists = await transactionsRepository.findByName(description);

    if (transactionExists && description != transaction.description) {
      throw new Error('There is already one product with this name');
    }

    transaction.description = description,
    transaction.price = price,
    transaction.category = category

    await transactionsRepository.save(transaction)

    return transaction;
  }
}

export {UpdateTransactionService}