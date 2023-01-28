import { useState } from "react";

const Example = () => {
  const [checkVal, setCheckVal] = useState();
  const onChange = (e) => setCheckVal(e.target.value);

  return (
    <>
      <label htmlFor="check">
        チェック:
        <input
          id="check"
          type="checkbox"
          value={checkVal}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Example;
