import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
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
    </div>
  );
};

export default Example;
