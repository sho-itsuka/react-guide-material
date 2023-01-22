import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);

  const shuffle = () => {
    // 新しい配列にして展開する(nums !=== newNums)
    const newNums = [...nums];
    // pop(): 配列の最後の要素を取り除き、その要素を返す(valueという変数に5が入る)
    const value = newNums.pop();
    // unshift(): 配列の最初に1つ以上の要素を追加し、新しい配列の長さを返す([1, 2, 3, 4]の先頭にvalueという変数(5)が入る)
    newNums.unshift(value);
    setNums(newNums);
  }

  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
