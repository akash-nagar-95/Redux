import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, reset, incrementByAmount } from './feature/counter/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncByAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container' >
        <h2>Count : {count}</h2>
        <div>
          <button onClick={handleIncrementClick} > + </button>
          <button onClick={handleDecrementClick} > - </button>
        </div>
        <br />
        <button onClick={handleResetClick} >Reset</button>

        <input 
        type='Number'
        value={amount} 
        placeholder='Enter amount'
        onChange={(e) => setAmount(e.target.value)} />
        <br />
        <button onClick={handleIncByAmountClick} >Inc by Amount</button>

    </div>
  );
}

export default App;
