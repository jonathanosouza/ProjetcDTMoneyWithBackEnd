import { EntityRepository, Repository } from 'typeorm';
import {Transaction} from '../Entity/Transaction';


@EntityRepository(Transaction)
class TransactionRepository extends Repository<Transaction> {
  
  public async findByName(description: string): Promise<Transaction | undefined>{
      const transaction = this.findOne({
        where: {
          description,
        }
      })
      return transaction
  }
  
}

export  {TransactionRepository}