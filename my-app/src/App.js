import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount, reset } from './feature/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState()
  const count = useSelector((state) => state.counter.value);
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
    dispatch(incrementByAmount());
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

        <input type="Number" value={amount} placeholder='Enter amount' onClick={(e) => setAmount(e.target.value)} />
        <button onClick={handleIncByAmountClick} >Inc by Amount</button>

    </div>
  );
}

export default App;
