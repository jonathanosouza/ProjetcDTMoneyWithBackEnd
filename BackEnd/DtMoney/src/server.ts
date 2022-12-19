import express from "express"
import { Router } from "express";
const cors = require('cors');


const routes = Router()

const app = express()

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(express.json());




import "./database"
import { productsRoutes } from "./routes/products.routes";
import { transactionsRoutes } from "./routes/trancasctions.routes";


app.use('/products', productsRoutes)
app.use('/transactions', transactionsRoutes)


app.listen(3335, () => console.log("Server is ok"))


 export default app