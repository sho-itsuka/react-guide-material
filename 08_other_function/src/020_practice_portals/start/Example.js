import { useState }     from "react";
import { createPortal } from "react-dom";

import Toast from "./components/Toast";

// ポータルを作成する
// 引数にchildrenが渡ってくる
const ToastPortal = ({children}) => {
  const target = document.querySelector('.container.start')
  return createPortal(children, target);
}

const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div>
      <div className="container start"></div>
      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      {toastOpen && (
        // <ToastPortal>で囲うことによって、"container start"の中にマウントされるようになる
        <ToastPortal>
          <Toast
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}
          />
        </ToastPortal>
      )}
    </div>
  );
};

export default Example;
