import {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios'

const initialState={
      transaction: [],
  error: null,
  loading: true
}
//Create context
export const GlobalContext =createContext(initialState);

//provider component

export const GlobalProvider=({children})=>{
    const [state, dispatch]=useReducer(AppReducer,initialState);


    //
    async function getTransactions() {
        try{
            const res=await axios.get('https://expensetracker-4-gnss.onrender.com/api/v1/transactions');
        
            dispatch({
                type:'GET_TRANSACTION',
                payload:res.data.data
            })
        }catch(err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload:err.response.data.error
            })
           
        }
        
    }
    //Action
    async function deleteTransaction(id){
        try{
            await axios.delete(`https://expensetracker-4-gnss.onrender.com/api/v1/transactions/${id}`) 
           
        
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }catch(err){
        dispatch({
            type:'TRANSACTION_ERROR',
            paylod:err.response.data.error
        })

    }
    }

   async function addtransaction(transaction){
    const config={
        Headers:{
            'Contenet-Type':'application/json'
        }
    }
         try{
            const res=await axios.post('https://expensetracker-4-gnss.onrender.com/api/v1/transactions',transaction,config)
        dispatch({
            type:'ADD_TRANSACTION',
            payload:res.data.data
        });
    }catch(err){
        dispatch({
            type:'TRANSACTION_ERROR',
            payload:err.response.data.error
        })
    }
    }

    return(<GlobalContext.Provider value={{transaction:state.transaction,deleteTransaction,
        addtransaction,
        getTransactions,
        error:state.error,
        loading:state.loading,


    }}>
        {children}
    </GlobalContext.Provider>

    )
}


