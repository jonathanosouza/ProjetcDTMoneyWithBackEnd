import { createContext, FormEvent, ReactNode, useEffect, useState } from "react";
import { api2 } from "./lib/axios";



interface Transaction {
  id: string,
  description: string,
  price: number,
  typeoper: string,
  category: string,
  createdAt: string
}

interface ITransaction {
  description: string,
  price: number,
  typeoper: string,
  category: string
}

interface ITransactionData {
  id: string
  description: string,
  price: number,
  typeoper: string,
  category: string,
  creaatedAt: string
}

interface TransactionContextData {
  // transactions: Transaction[],
  handleCreateNewTransaction: FormEvent
  id: string
  description: string,
  price: number,
  typeoper: string,
  category: string,
  creaatedAt: string
  handleAddToCart: () => void
  transactiondata: ITransactionData[],
  setTransactionData: any
  loadInfoProfile: () => Promise<void>


}
interface TransactionsProvaiderProps {
  children: ReactNode
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);


export function TransactionsProvaider({ children }: TransactionsProvaiderProps) {

  const [transactiondata, setTransactionData] = useState<ITransactionData[]>([])

  async function loadInfoProfile() {
    api2.get('/transactions').then((response) => setTransactionData(response.data))
  }

  useEffect(() => {
    loadInfoProfile()
  }, [])


  return (
    <TransactionContext.Provider value={{ transactiondata, setTransactionData, loadInfoProfile }}>
      {children}
    </TransactionContext.Provider>
  )

}


