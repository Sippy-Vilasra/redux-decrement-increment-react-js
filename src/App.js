
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { incrementData, decrementData } from "./ReduxCunter/action"

const App = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.comReducer)
  return (
    <div className="App">
      <h1>Increment & Decrement</h1>
      <button onClick={() => dispatch(decrementData(3))}>DECREMENT</button>
      <span>{myState}</span>
      <button onClick={() => dispatch(incrementData(5))}>INCREMENT</button>
    </div>
  );
}

export default App;
