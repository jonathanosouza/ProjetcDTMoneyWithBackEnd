import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// // createServer({

// //     models:{
// //       transaction: Model,
// //     },

// //     seeds(server){
// //       server.db.loadData({
// //         transactions: [
// //           {
// //             id: 1,
// //             title: 'Desenvolvimento de Site',
// //             type: 'deposit',
// //             category: 'Work',
// //             amount: 3000,
// //             creaatedAt: new Date('2022-07-27 09:00:00')
// //           },
// //           {
// //             id: 2,
// //             title: 'Aluguel',
// //             type: 'withDraw',
// //             category: 'Casa',
// //             amount: 1000,
// //             creaatedAt: new Date('2022-08-28 09:00:00')
// //           },
// //         ]
// //       })
// //     },


//   routes(){
//     this.namespace = 'api';


//     this.get('/transactions', () => {
//      return this.schema.all('transaction')
//     })
  
//     this.post('/transactions', (schema, request) => {
//       const data = JSON.parse(request.requestBody)

//       return schema.create('transaction' , data)
//     })

//   }
// })



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
