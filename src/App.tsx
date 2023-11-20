import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

function App() {
  const { state, increment, decrement, handleTextInput } =
    useContext(CounterContext);
  const { count, info } = state;

  return (
    <>
      <h3 className="text-center">Count is {count}</h3>
      <div className="center-items">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>

      <br />

      <input type="text" onChange={handleTextInput} className="text-center" />
      <h4 className="text-center">{info}</h4>
    </>
  );
}

export default App;
