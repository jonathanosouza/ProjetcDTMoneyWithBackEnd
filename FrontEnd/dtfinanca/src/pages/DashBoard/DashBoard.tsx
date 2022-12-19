import { AddTransitionContainer, ButtonRadioChoice, ChoiceInput, FotterContainer, ReturnHome, TransitionContainer } from "./DashBoardstyles";
import { FormEvent, useContext, useState } from "react";
import { TransactionContext } from "../../transactionsContex";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import input from './../../../assets/income.svg'
import output from './../../../assets/outcome.svg'
import { api2 } from "../../lib/axios";



export function DashBoard() {
  const { setTransactionData } = useContext(TransactionContext);


  const { register, handleSubmit, setValue, reset } = useForm()


  function handleCreateNewTransaction(TransactionData: ITransaction) {
    api2.post('transactions', TransactionData)
      .then(response => { setTransactionData(response.data), console.log(response.data) })
      .catch(error => console.log(error))
    reset()

    window.location.reload()

  }





  return (
    <TransitionContainer
      onSubmit={handleSubmit(handleCreateNewTransaction)}
    >
      <ReturnHome ><Link to="/">x</Link></ReturnHome>

      <strong>
        Cadastar Transação
      </strong>

      <AddTransitionContainer >
        <input
          type="text"
          placeholder="Descrição"
          {...register("description")}
        />

        <input
          type="number"
          placeholder="Preço"
          {...register("price")}
        />
      </AddTransitionContainer>


      <ChoiceInput>
        <ButtonRadioChoice
          type="button"
          onClick={() => setValue("typeoper", "E")}
        ><img src={input} alt="" /> Entrada </ButtonRadioChoice>


        <ButtonRadioChoice
          type="button"
          onClick={() => setValue("typeoper", "S")}
        ><img src={output} alt="" /> Saida </ButtonRadioChoice>


      </ChoiceInput>
      <FotterContainer>
        <input
          type="text"
          placeholder="Categoria"
          // value={category}
          {...register("category")}
        />
        <button>Cadastrar</button>
      </FotterContainer>

    </TransitionContainer>
  )
}