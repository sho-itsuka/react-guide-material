import { useState } from "react";

const Example = () => {
  const [checkVal, setCheckVal] = useState();
  const toggleChecked = (e) => {
    // 仮にtrue が渡ってきたら、false を返す
    // setCheckVal((prev) => {
    //   const state = !prev;
    //   return state;
    // });

    // 上記を簡略化
    setCheckVal(prev => !prev);
  };

  return (
    <>
      <label htmlFor="check">
        チェック:
      </label>
      <input
        id="check"
        type="checkbox"
        checked={checkVal}
        // チェックをつけたり外したりできる
        onChange={toggleChecked}
      />
      <div>{checkVal ? "ON!" : "OFF"}</div>
    </>
  );
};

export default Example;
