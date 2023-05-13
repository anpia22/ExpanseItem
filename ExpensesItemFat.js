import "./App.css";

import ExpanseItem from "./components/ExpanseItem";
// import ExpanseDetails from "./components/ExpanseDetails";
import "./components/ExpanseItem.css";
const App = () => {
  const expanses = [
    {
      location: "wardha",
      date: new Date(2012, 8, 23),
      title: "food",
      amount: 10,
    },
    {
      location: "wardha",
      date: new Date(2012, 8, 24),
      title: "Pertrol",
      amount: 100,
    },
    {
      location: "wardha",
      date: new Date(2012, 8, 26),
      title: "Movie",
      amount: 200,
    },
  ];
  return (
    <div className="bg-ground">
      <p>Lets get Started</p>
      {expanses.map((expense, index) => (
        <ExpanseItem
          // key={index}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
        />
      ))}

      {/* <ExpanseItem
        type={expanses[1].type}
        date = {expanses[1].date}
        amount={expanses[1].amount}
        location={expanses[1].location}
      ></ExpanseItem>
      <ExpanseItem
        type={expanses[2].type}
        date = {expanses[2].date}
        amount={expanses[2].amount}
        location={expanses[2].location}
      ></ExpanseItem> */}
    </div>
  );
}

export default App;
