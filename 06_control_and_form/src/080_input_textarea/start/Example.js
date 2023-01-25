import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  return (
    <div>
      <label htmlFor="456">ラベル</label>
      <div>
        <input
          id="123"
          type="text"
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          />
      </div>
      <div>
        <input
          id="456"
          type="text"
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          />
      </div>
      <h3>{val}</h3>
      <button onClick={clearVal}>クリア</button>
    </div>
  );
};

export default Example;
