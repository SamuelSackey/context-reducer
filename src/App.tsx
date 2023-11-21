import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

function App() {
  const { state, increment, decrement, handleTextInput } =
    useContext(CounterContext);
  const { count, info } = state;

  return (
    <>
      <h1 className="text-center">
        Context with useReducer for State Managements
      </h1>

      <br />

      <h3 className="text-center">Count is {count}</h3>
      <div className="center-items">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>

      <br />

      <div className="center-items">
        <input type="text" onChange={handleTextInput} />
      </div>
      <h4 className="text-center">{info}</h4>
    </>
  );
}

export default App;
