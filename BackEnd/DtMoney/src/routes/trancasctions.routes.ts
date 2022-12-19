import { Router } from "express";
import { TransactionsController } from "../dtmoney/controllers/TransactionsController";



const transactionsRoutes = Router()
const transactionsController = new TransactionsController()

transactionsRoutes.get('/', transactionsController.index)
transactionsRoutes.get('/:id', transactionsController.show)
transactionsRoutes.post('/', transactionsController.create)
transactionsRoutes.put('/:id', transactionsController.update)
transactionsRoutes.delete('/:id', transactionsController.delete)


export {transactionsRoutes}