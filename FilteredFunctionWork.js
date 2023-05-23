import ExpanseItem from "./ExpanseItem"
import Card from "../UI/Card"
import { useState } from "react"
import ExpensesFilter from "./ExpensesFilter";

const Expanses=(props)=>{
  const [filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = selectYear => {
    setFilteredYear(selectYear);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

    return (<Card className="bg-ground">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

     {filteredExpenses.map((expense) => (
      <ExpanseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        location={expense.location}
      />
    ))}
    </Card>)
}
export default Expanses;
