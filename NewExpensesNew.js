import React, { useState } from "react";
import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm";

const NewExpenses = (props) => {

    const [isEditing, setIsEditing] = useState(false)
    const saveExpensesData = (enteredExpenseData)=> {
        const expensesData ={
            ...enteredExpenseData,
            id:Math.random.toString()
        }
        // console.log(expensesData)
        props.onAddExpenses(expensesData)
        setIsEditing(false)
    }
    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };

    return (<div className="new-expense">
        {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
        <ExpensesForm onSaveExpensesData={saveExpensesData}
        onCancel={stopEditingHandler}/>
            
        )}
    </div>)
}

export default NewExpenses;
