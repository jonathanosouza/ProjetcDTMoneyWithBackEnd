import { FormEvent, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SearchFormInputs, TransactionContext } from "../../transactionsContex";
import { PriceColor, SearchPesquisa, TransitionsContainer, TransitionsList } from "./TransationStyles";
import { api2 } from "../../lib/axios";
import { Trash } from 'phosphor-react'

interface ITransactionData {
  id: string
  description: string,
  price: number,
  typeoper: string,
  category: string,
  createdAt: string
}

interface TransactionProps {
  dash: ITransactionData[]

}
export function Transitions() {
  const { transactiondata, setTransactionData, loadInfoProfile } = useContext(TransactionContext);



  async function deleteTransiction(id: string) {
    api2.delete(`/transactions/${id}`).then((response) => setTransactionData(response.data))
    window.location.reload()

  }


  const { register, handleSubmit, formState: { errors }, reset } = useForm()


  function handleSearchTransactions(data: SearchFormInputs) {
    console.log(data)
  }

  function handleChangeAsk(e: FormEvent) {
    e.preventDefault()
  }


  return (

    <>
      <SearchPesquisa onSubmit={handleSubmit(handleSearchTransactions)}>
        <input
          type="text"
          placeholder="Pesquisar Transação"
          {...register('query')}
        />
        <button> Pesquisar </button>
      </SearchPesquisa>
      <TransitionsContainer>

        <TransitionsList>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {transactiondata.map(transaction => (
                <tr key={transaction.id}>
                  <td >{transaction.description}</td>
                  <td className={transaction.typeoper}>
                    <PriceColor variant={transaction.typeoper}>
                      R$ {transaction.price}
                    </PriceColor>

                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.creaatedAt}</td>
                  <td><button
                    onClick={() => deleteTransiction(transaction.id)}><Trash size={22} /></button></td>
                </tr>
              )
              )}
            </tbody>
          </table>
        </TransitionsList>

      </TransitionsContainer>
    </>
  )
}