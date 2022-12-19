import {Request, Response} from 'express'
import { CreateTransactionService } from '../Services/CreateTransactionService'
import { DeleteTransactionService } from '../Services/DeleteTransactionService'
import { ListTransactionService } from '../Services/ListTransactionService'
import { ShowTransactionService } from '../Services/ShowTransactionService'
import { UpdateTransactionService } from '../Services/UpdateTransactiontService'


class TransactionsController {
  public async index(request: Request, response: Response): Promise<Response>{
     const listTrancasction  = new ListTransactionService()
     const transaction = await listTrancasction.execute()
     return response.json(transaction)
  }

  public async show(request: Request, response: Response): Promise<Response>{
    const {id} = request.params
    const showTrancasction = new ShowTransactionService()
    const transaction = await showTrancasction.execute({id})

    return response.json(transaction)
 }

 public async create(request : Request, response: Response): Promise<Response>{
  const {description, price, category, typeoper} = request.body
  const createTransaction = new CreateTransactionService()
  const transaction = await createTransaction.execute({description, price, category , typeoper})

  console.log(transaction)
  return response.json(transaction)
 }  

 public async update(request : Request, response: Response): Promise<Response>{
  const {description, price, category} = request.body
  const {id} = request.params

  const updateTransaction = new UpdateTransactionService()
  const transaction = await updateTransaction.execute({
    id,
    description, 
    price, 
    category})

  return response.json(transaction)
 }  


 public async delete(request: Request, response: Response): Promise<Response>{
  const {id} = request.params
  const deleteTrasaction = new DeleteTransactionService()
  await deleteTrasaction.execute({id})

  return response.json([])
}

}

export { TransactionsController}