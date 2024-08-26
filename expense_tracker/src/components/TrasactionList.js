import React,{useContext,useEffect} from 'react'
import { GlobalContext } from './context/GlobalState'
import Transaction from './Transaction';

const TrasactionList = () => {
const {transaction,getTransactions}=useContext(GlobalContext);
console.log(transaction)
useEffect(()=>{

  getTransactions();

// eslint-disable-next-line
},[])

  return (
    <>
  <h3>History</h3>
  <ul className='list'>
   {
    transaction.map((transaction)=>(<Transaction  key={transaction.id} transaction={transaction}/>))
   }
  </ul>
    </>
   
  )
}

export default TrasactionList