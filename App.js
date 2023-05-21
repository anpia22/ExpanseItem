import "./App.css";
import NewExpenses from "./components/Expanses/NewExpenses";
import Expanses from "./components/Expanses/Expanses";
import { useState } from "react";


const App=()=>{
  const [expanses,setExpenses] = useState([]);

  const addExpensesHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses,expense]
    })
  }  

  return (<div>
    <NewExpenses onAddExpenses={addExpensesHandler}/>
    <Expanses expanses={expanses}/>
    </div>)
  };

export default App;


   
