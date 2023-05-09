import logo from './logo.svg';
import './App.css';

import ExpanseItem from './components/ExpanseItem';
import "./components/ExpanseItem.css"
function App() {
  const expanses = [
    {
      location: "wardha",
      type: 'food',
      amount: 10
    },
    {
      location: "wardha",
      type: 'Pertrol',
      amount: 100
    },
    {
      location: "wardha",
      type: 'Movie',
      amount: 200
    }
  ]
  return (
    <div className='bg-ground'>
        <p>Lets get Started</p> 
        {expanses.map((expense, index) => (
        <ExpanseItem key={index} type={expense.type} amount={expense.amount} location={expense.location} />
      ))}
        
        {/* <ExpanseItem type={expanses[1].type} amount={expanses[1].amount} location={expanses[1].location}></ExpanseItem>
        <ExpanseItem type={expanses[2].type} amount={expanses[2].amount} location={expanses[2].location}></ExpanseItem>    */}
    </div>
  );
}

export default App;
