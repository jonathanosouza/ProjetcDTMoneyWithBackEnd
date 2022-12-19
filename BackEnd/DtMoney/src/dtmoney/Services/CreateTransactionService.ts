import { getCustomRepository } from 'typeorm';
import { Transaction } from '../Entity/Transaction';
import { TransactionRepository } from '../repository/TransactionRepository';


interface IRequest {
  description: string;
  price: number;
  typeoper : string;
  category: number;
}

class CreateTransactionService {
  public async execute({description, price, typeoper , category }: IRequest): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionRepository);
     
      const transactionCreate = transactionsRepository.create({
        description,
        price, 
        typeoper,
        category
      })

    const transaction = await transactionsRepository.save(transactionCreate);
    return transaction;
  }
}

export {CreateTransactionService}