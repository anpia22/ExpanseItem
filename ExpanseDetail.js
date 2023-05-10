import ExpanseDate from "./ExpanseDate";
// import ExpenseDetails from "./ExpenseDetails";

function ExpanseDetails(props) {
  return (
    <div className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>{props.title}</h2> */}
        <ExpanseDetails amount={props.amount} location={props.location} title={props.title} />
      </div>
    </div>
  );
}

export default ExpanseDetails;
