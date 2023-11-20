import { ChangeEvent, ReactElement, createContext, useReducer } from "react";

type StateType = {
  count: number;
  info: string;
};

const initState: StateType = {
  count: 0,
  info: "",
};

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerActionType = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: StateType, action: ReducerActionType): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, info: action.payload ?? "" };
    default:
      throw new Error("Action not found");
  }
};

type CounterContextType = {
  state: StateType;
  increment: () => void;
  decrement: () => void;
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

const initCounterContextState: CounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  handleTextInput: (_e: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext = createContext<CounterContextType>(
  initCounterContextState
);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const CounterProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });

  const stateValues: CounterContextType = {
    state,
    increment,
    decrement,
    handleTextInput,
  };

  return (
    <CounterContext.Provider value={stateValues}>
      {children}
    </CounterContext.Provider>
  );
};
