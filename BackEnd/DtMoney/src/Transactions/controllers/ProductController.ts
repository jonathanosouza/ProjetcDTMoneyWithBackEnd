import { ListProductService } from "../Services/ListProductService"
import { CreateProductService } from "../Services/CreateProductService"
import {Request, Response} from 'express'
import { ShowProductService } from "../Services/ShowProductService"
import { UpdateProductService } from "../Services/UpdateProductService"
import { DeleteProductService } from "../Services/DeleteProductService"


class ProductsController {
  public async index(request: Request, response: Response): Promise<Response>{
     const listProducts = new ListProductService()
     const products = await listProducts.execute()
     return response.json(products)
  }

  public async show(request: Request, response: Response): Promise<Response>{
    const {id} = request.params
    const showProducts = new ShowProductService()
    const products = await showProducts.execute({id})

    return response.json(products)
 }

 public async create(request : Request, response: Response): Promise<Response>{
  const {name, price, quantity } = request.body
  const createProduct = new CreateProductService()
  const product = await createProduct.execute({name, price, quantity})

  console.log(product)
  return response.json(product)
 }  

 public async update(request : Request, response: Response): Promise<Response>{
  const { name, price, quantity} = request.body
  const {id} = request.params

  const updateProduct = new UpdateProductService()
  const product = await updateProduct.execute({
    id,
    name, 
    price, 
    quantity})

  return response.json(product)
 }  


 public async delete(request: Request, response: Response): Promise<Response>{
  const {id} = request.params
  const deleteProducts = new DeleteProductService()
  await deleteProducts.execute({id})

  return response.json([])
}

}

export { ProductsController}