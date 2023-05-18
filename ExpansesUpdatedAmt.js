// import ExpenseDetails from "./ExpenseDetails";
import { useState } from "react";

const ExpanseDetails = (props) => {
    // let [title,setTitle] = useState(props.title);
    let [amount,setTitle] = useState(props.amount);


  // let title = props.title;

  const delExpanses = () => {
    console.log("Delete Expenses");
    // title = "update";
    // console.log(title);
    setTitle('$100');
  };


  return (
    <div>
      <div className="expense-item__description">
        {props.title} <span className="expense-item__price">Rs {amount}</span>
        <button onClick={delExpanses}>Delete Expenses</button>
      </div>
    </div>
  );
};

export default ExpanseDetails;
