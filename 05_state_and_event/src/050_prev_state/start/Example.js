import { useState } from "react";

// const Example = () => {
//   const [ count, setCount ] = useState(0);
// 
//   return (
//     <>
//       <p>現在のカウント数: {count}</p>
//       <button onClick={() => {
//         setCount(count + 2);
//       }}>+</button>
//       <button onClick={() => {
//         setCount(count - 1);
//       }}>-</button>
//     </>
//   );
// };

// 関数を用いて書き換え

const Example = () => {
  const [ count, setCount ] = useState(0);
  
  const countUp = () => {
    setCount(count + 2);
  }
  const countDown = () => {
    setCount(count - 1);
  }

  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
