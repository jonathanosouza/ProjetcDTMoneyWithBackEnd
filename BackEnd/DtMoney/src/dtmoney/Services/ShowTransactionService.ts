import { getCustomRepository } from 'typeorm';
import { Transaction } from '../Entity/Transaction';
import { TransactionRepository } from '../repository/TransactionRepository';

interface  IRequest{
  id: string
}

class ShowTransactionService {
  public async execute({id} : IRequest): Promise<Transaction | undefined> {
    const transactionRepository = getCustomRepository(TransactionRepository);
    const transaction = await transactionRepository.findOne(id)

    if (!transaction){
        throw Error(' Produto not found')
    }
    return transaction;
  }
}

export {ShowTransactionService}