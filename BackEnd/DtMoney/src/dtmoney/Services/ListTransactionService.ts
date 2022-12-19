import { getCustomRepository } from 'typeorm';
import { Transaction } from '../Entity/Transaction';

import { TransactionRepository } from '../repository/TransactionRepository';


class ListTransactionService {
  public async execute(): Promise<Transaction[]> {
    const transactionRepository = getCustomRepository(TransactionRepository);
    const transaction = transactionRepository.find()
    return transaction;
  }
}

export {ListTransactionService}