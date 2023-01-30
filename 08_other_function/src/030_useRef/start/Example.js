import { useState } from "react";
import { useRef }   from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef()
  // refオブジェクトは、currentプロパティを必ず持っている
  // 上記に対して、ref属性で渡した際に current プロパティに対して値を保持できる
  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};

export default Example;
