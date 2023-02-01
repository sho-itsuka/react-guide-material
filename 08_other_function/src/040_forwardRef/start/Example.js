import { useRef, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
})

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;

// 結論
// ref はコンポーネント間でも共有できるが、ref を受け渡してDOMのやり取りをすることは、
// コンポーネント同士の依存関係が強くなってしまうので、あまり使わない方が良い。
