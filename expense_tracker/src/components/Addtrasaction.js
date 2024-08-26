import React,{useState,useContext} from 'react';
import { GlobalContext } from './context/GlobalState';


const Addtrasaction = () => {
    const[text,setText]=useState('');
    const[amount,setAmount]=useState(0)
    const {addtransaction}=useContext(GlobalContext);

    const onSubmt=e=>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*10000000),
            text,
            amount:+amount
        }
        addtransaction(newTransaction)
        //clear the field
        setText('');
        setAmount(0);
    }
   
  return (
<>
 <h3>Add new transaction</h3>
 <form onSubmit={onSubmt}>
    <div className='form-control'>
        <label>
            <b>Income or Expense</b></label>
        <input type='text'  value={text} onChange={(e)=>{setText(e.target.value)}} placeholder='Enter text ...'/>
    </div>
    <div className='form-control'>
        <label for='amount'> <b>Amount<br/></b>
        (negative-expense, positive - income)</label>
        <input type='number' value={amount}  onChange={(e)=>{setAmount(e.target.value)}}  placeholder='Enter amout...'/>
    </div>
    <button className='btn'>Add transaction</button>
 </form>
</>
  )
}

export default Addtrasaction