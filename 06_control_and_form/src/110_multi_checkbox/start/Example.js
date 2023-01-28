import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple",  value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e) => {};

  return (
    <div>
      {fruits.map(fruit => {
        return (import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple",  value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    // newFruits という変数に再代入
    const newFruits = fruits.map(fruit => {
      // 新しい変数に、スプレッド演算子で再代入する(fruitオブジェクトには1つずつオブジェクトが渡ってくる)
      const newFruit = { ...fruit };
      if(newFruit.label === e.target.value) {
        // 現在はchecked: false なので、! をつけることでtrue を表現
        newFruit.checked = !fruit.checked;
      }
      return newFruit;
    })

    setFruits(newFruits);
  };

  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label}>
            <input
              id={fruit.label}
              type="checkbox"
              value={fruit.label}
              checked={fruit.checked}
              onChange={handleChange}
            />
            <label htmlFor={fruit.label}>{fruit.label}:{fruit.value}</label>
          </div>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;

          <div key={fruit.label}>
            <input
              id={fruit.label}
              type="checkbox"
              value={fruit.label}
              checked={fruit.checked}
              onChange={handleChange}
            />
            <label htmlFor={fruit.label}>{fruit.label}:{fruit.value}</label>
          </div>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
