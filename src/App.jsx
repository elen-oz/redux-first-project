import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className='card'>
      <h2>count is {count}</h2>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>increment</button>
      <br />
      <button onClick={() => dispatch(incrementByAmount(33))}>
        increment by 33
      </button>
    </div>
  );
}

export default App;
