import { useState } from "react";

// const Example = () => {
//   const [fruit, setFruit] = useState("Apple");
//   const onChange = (e) => setFruit(e.target.value);

//   return (
//     <>
//       <label>
//         <input
//           type="radio"
//           value={"Apple"}
//           checked={fruit === "Apple"}
//           onChange={onChange}
//         />
//         Apple
//       </label>
//       <label>
//         <input
//           type="radio"
//           value={"Banana"}
//           checked={fruit === "Banana"}
//           onChange={onChange}
//         />
//         Banana
//       </label>
//       <label>
//         <input
//           type="radio"
//           value={"Cherry"}
//           checked={fruit === "Cherry"}
//           onChange={onChange}
//         />
//         Cherry
//       </label>
//       <h3>私は{fruit}が食べたい</h3>
//     </>
//   );
// };

// map() メソッドを用いて上記コードを書き換え
const Example = () => {
  const [fruit, setFruit] = useState("");
  const onChange = (e) => setFruit(e.target.value);

  const radioCollection = ["Apple", "Banana", "Cherry"]

  return (
    <>
      {radioCollection.map((value) => {
        return (
          <label>
            <input
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={onChange}
            />
            {value}
          </label>
        )
      })}
      <h3>私は{fruit}が食べたい</h3>
    </>
  )
}

export default Example;
