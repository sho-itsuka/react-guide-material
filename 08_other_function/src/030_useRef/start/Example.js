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

const Case2 = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();
  
  return (
    <>
      <h3>ユースケース2</h3>
      <video style={{ maxWidth: "100%" }} ref={videoRef}>
        <source src="./sample.mp4"></source>
      </video>
      <button onClick={() => {
        if(playing) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setPlaying(prev => !prev);
      }}>
        { playing ? "Stop" : "Play" }
      </button>
    </>
  );
};

const Case3 = () => {
  return (
    <>
      <button>更新1</button>
      <button>更新2</button>
    </>
  )
}

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  );
};

export default Example;
