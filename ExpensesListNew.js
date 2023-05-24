import ExpanseItem from "./ExpanseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  //   let expensecontent = <p>No Expenses found</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  } else if (props.items.length === 1) {
    return (
      <div>
        <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
        <ul className="expenses-list">
          {props.items.map((expense) => (
            <ExpanseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
              location={expense.location}
            />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpanseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
