import { useState } from 'react';

const Example = () => {
  const [ countA, setCountA ] = useState(0);
  const [ countB, setCountB ] = useState(10);
  const [ countC, setCountC ] = useState(100);
  return (
    <>
      <p>ボタンAを{countA}回押しました！</p>
      <button onClick={() => {
        setCountA(countA + 1);
      }}>ボタンA</button>

      <p>ボタンBを{countB}回押しました！</p>
      <button onClick={() => {
        setCountB(countB + 2);
      }}>ボタンB</button>

      <p>ボタンC{countC}回押しました！</p>
      <button onClick={() => {
        setCountC(countC + 3);
      }}>ボタンC</button>
    </>
  )
};

export default Example;
