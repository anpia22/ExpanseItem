// import ExpenseDetails from "./ExpenseDetails";
const delExpanses=()=>{
  console.log('Delete Expenses');
}
const ExpanseDetails = (props) => {
  return (
    <div>
      <div className="expense-item__description"><span className="expense-item__price">Rs {props.amount}</span>
        <button onClick={delExpanses} >Delete Expenses</button>
        </div>
    </div>
  );
}

export default ExpanseDetails;
