import { Container, DashContainer, DashInPut, DashOutPut, DashTotal } from "./HomeStyles";
import input from '../../../assets/income.svg'
import output from '../../../assets/outcome.svg'
import total from '../../../assets/Vector.png'
import { Transitions } from "../Transitions/Transations";
import { useContext } from "react";
import { TransactionContext } from "../../transactionsContex";

import { number } from "zod";


interface ITransactionData {
  id: string
  description: string,
  price: number,
  typeoper: string,
  category: string,
  creaatedAt: string
}

interface TransactionProps {
  dash: ITransactionData[]

}

export function Home() {
  const { transactiondata } = useContext(TransactionContext);


  const quantity = transactiondata.reduce((acc, transaction) => {
    if (transaction.typeoper == 'E') {
      acc.entrada += parseFloat(transaction.price, number)
      acc.total += parseFloat(transaction.price, number)
    } else {
      acc.saida += parseFloat(transaction.price, number)
      acc.total -= parseFloat(transaction.price, number)

    }
    return acc
  },
    {
      entrada: 0,
      saida: 0,
      total: 0
    })

  return (
    <Container>
      <DashContainer>

        <DashInPut>
          <header>
            <span>Entradas</span>
            <img src={input} alt="" />
          </header>

          <div>
            <strong> R$ {quantity.entrada}</strong>
          </div>

        </DashInPut>

        <DashOutPut>
          <header>
            <span>Saídas</span>
            <img src={output} alt="" />
          </header>

          <div>
            <strong> R$ {quantity.saida}</strong>
          </div>
        </DashOutPut>

        <DashTotal>
          <header>
            <span>Total</span>
            <img src={total} alt="" />
          </header>

          <div>
            <strong> R$ {quantity.total}</strong>
          </div>
        </DashTotal>
      </DashContainer>

      <Transitions />
    </Container>

  )
}