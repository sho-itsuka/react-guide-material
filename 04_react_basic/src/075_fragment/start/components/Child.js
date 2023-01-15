// Point: 複数タグの場合には、Fragmentを使用する
// 余計なタグ(空タグ)を使用したくないときに、Fragmentを使用する！

import "./Child.css";
import React from 'react';

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <p>行の追加</p>
    </React.Fragment>
  );
};
// export default Child;

/**
 * 書き換え1(<Fragment></Fragment> で囲む)
 */
// import "./Child.css";
// import { Fragment } from 'react';

// const Child = () => {
//   return (
//     <Fragment>
//       <div className="component">
//         <h3>Hello Component</h3>
//       </div>
//       <h3>Hello Fragment</h3>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat dolor doloribus iure consequatur soluta? Optio corrupti ratione suscipit recusandae eius perspiciatis illo corporis? Aliquam nam repellendus quos expedita est?</p>
//     </Fragment>
//   );
// };
// export default Child;

/**
 * 書き換え2(<> </> で囲む)
 */
// import "./Child.css";

// const Child = () => {
//   return (
//     <>
//       <div className="component">
//         <h3>Hello Component</h3>
//       </div>
//       <h3>Hello Fragment</h3>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat dolor doloribus iure consequatur soluta? Optio corrupti ratione suscipit recusandae eius perspiciatis illo corporis? Aliquam nam repellendus quos expedita est?</p>
//     </>
//   );
// };
// export default Child;
