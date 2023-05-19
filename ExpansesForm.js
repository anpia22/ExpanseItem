import React from "react";
import './ExpensesForm.css'
const ExpensesForm = () => {
    
    const titalChange = (e) =>{
        console.log(e.target.value)
    }
  return (
    <form>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titalChange}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={titalChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={titalChange}/>
        </div>
      </div>
      <div className="new-expense__actives">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};
export default ExpensesForm;
