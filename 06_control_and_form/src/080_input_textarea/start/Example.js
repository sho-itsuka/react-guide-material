import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const clearVal      = () => setVal("");

  return (
    <div>
      {/* label要素の値を押下すると、htmlForと同じ値を持つidがフォーカスされる */}
      <label htmlFor="456">ラベル</label> 
      <div>
        <input
          id="123"
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        {/* JXSの場合は閉じタグ不要(inputと同じように記述する) */}
        <textarea
          id="456"
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
