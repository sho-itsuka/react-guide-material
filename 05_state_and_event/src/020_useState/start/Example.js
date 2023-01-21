import { useState } from 'react';

// const Example = () => {
//   let valArray = useState();
//   return (
//     <>
//       <input
//       type="text"
//       onChange={(e) => {
//         const setFn = valArray[1];
//         setFn(e.target.value)
//         }} /> = {valArray[0]}
//     </>
//   );
// };


// 分割代入を用いて書き換え(基本的にはこちらの記述方法を使用！)
const Example = () => {
  const [val, setVal] = useState();

  return (
    <>
      <input
      type="text"
      onChange={(e) => {
        setVal(e.target.value)
      }} = {val}
    </>
  );
};

export default Example;
