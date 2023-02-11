import {useReducer, useState} from "react";

const Example = () => {
  const [state, setState]  = useState(0);
  const [rstate, dispatch] = useReducer((prev, {type, step}) => {
    switch(type) {
      case '+':
        return prev + step;
      case '-':
        return prev - step;
      default:
        throw new Error('不明なアクションです。');
    }
    // if (action === '+') {
    //   return prev + 2;
    // } else if (action === '-') {
    //   return prev - 3;
    // }
  }, 0);

  const countUp    = () => {
    setState(prev => ++prev);
  }

  const rcountUp   = () => {
    dispatch({ type: '+', step: 2 });
  }

  const rcountDown = () => {
    dispatch({ type: '-', step: 3} );
  }
  
  return (
    <>
      <div>
        <h3>State</h3>
        <p>{state}</p>
        <button
          onClick={countUp}
        >+</button>
      </div>
      <div>
        <h3>Reducer</h3>
        <p>{rstate}</p>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
