import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import TrasactionList from './components/TrasactionList';
import Addtrasaction from './components/Addtrasaction';
import { GlobalProvider } from './components/context/GlobalState';

function App() {
  return (
  
    <>
      <GlobalProvider>
      <Header/>
      <div className='container'>
      <Balance/>
      <IncomeExpenses/>
      <TrasactionList/>
      <Addtrasaction/>
      </div>
   
    </GlobalProvider>
    </>
 
  );
}

export default App;
