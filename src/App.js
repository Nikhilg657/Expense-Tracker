import Expenses from './Components/Expenses/Expense';
import NewExpense from './Components/NewExpenses/NewExpense';
import React,{useState} from 'react';
import './app.css';
const originalExpenses=[
  {id:1,
  title:'Car Insuarance',
  date: new Date(2020,2,23),
  amount: 200
  } ,
  {id:2,
  title:'News Paper',
  date: new Date(2021,12,3),
  amount: 1000
  } ,
  {id:3,
  title:'Choclate',
  date: new Date(2021,9,2),
  amount: 20
  } ,
  {id:4,
  title:'Car',
  date: new Date(2022,6,23),
  amount: 20000
  } 
];
function App() {
  let [expenses,setExpenses]=useState(originalExpenses);

  const newDataFromNewExpense=(data)=>{
    setExpenses((prevExpenses)=>{
      return [data , ...prevExpenses];
    });

  };
  return (
    <div>
      <h1 className='webtitle'>Expense Tracker</h1>
      <NewExpense newDataApp={newDataFromNewExpense}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
