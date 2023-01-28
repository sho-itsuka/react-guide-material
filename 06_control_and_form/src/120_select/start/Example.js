import { useState } from "react";

const Example = () => {
  const [selectVal, setSelectVal] = useState("Banana");

  return (
    <>
      <select
        value={selectVal}
        onChange={(e) => setSelectVal(e.target.value)}
      >
      <option value="Apple">Apple</option>
      <option value="Banana">Banana</option>
      <option value="Cherry">Cherry</option>
      </select>
      <div>選択された果物: {selectVal}</div>
    </>
  );
};

export default Example;
