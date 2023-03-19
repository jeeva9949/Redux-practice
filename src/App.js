import "./App.css";
import { Increment, Decrement, Multiplication,Division } from "./actions/index";


import { useSelector, useDispatch } from "react-redux";

function App() {
  const mystate1 = useSelector((state) => state.ChangeNumber);
  const mystate2 = useSelector((state) => state.ALU);
  const dispatch = useDispatch()
  
  return (
    <>
      <div className="App1">
        <h1>Redux</h1>
        <div className="App">
          <button onClick={() => dispatch(Increment())}>+</button>
          <p>{mystate1}</p>
          <button onClick={() => dispatch(Decrement())}>-</button>
        </div>
      </div>
      <div className="App1">
        <h1>Redux</h1>
        <div className="App">
          <button onClick={() => dispatch(Multiplication())}>*</button>
          <p>{mystate2}</p>
          <button onClick={() => dispatch(Division())}>/</button>
        </div>
      </div>
    </>
  );
}

export default App;
