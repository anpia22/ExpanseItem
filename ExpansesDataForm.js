import React from "react";
import "./ExpensesForm.css";
import { useState } from "react";
const ExpensesForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titalChange = (e) => {
    setEnteredTitle(e.target.value);
    // console.log(e.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: e.target.value });
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredTitle:e.target.value};
    // })
  };

  const amountChanged = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value });
  };
  const DateChanged = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value });
  };
  const submitForm = (event) => {
    event.preventDefault();

    const expansesData = {
      title : enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    console.log(expansesData)
  }
  return (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titalChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChanged}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={DateChanged}
          />
        </div>
      </div>
      <div className="new-expense__actives">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};
export default ExpensesForm;
