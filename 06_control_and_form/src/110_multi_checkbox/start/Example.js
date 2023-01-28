import { useState } from "react";

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

    // let sumVal = 0;
    // forEach()で実装
    // newFruits.forEach(fruit => {
    //   if(fruit.checked) {
    //     sumVal += fruit.value;
    //   }
    // });

    // filter()で実装
    // newFruits
      // fruitのチェックされているもののみを配列で取得
      // .filter((fruit) => fruit.checked)
      // それぞれのfruitを足し合わせる
      // .forEach((fruit) => (sumVal = sumVal + fruit.value));
    
    // reduce()で実装
      // 上で記述した変数sumValをコメントアウト
      let sumVal = newFruits
      .filter((fruit) => fruit.checked)
      .reduce((sumVal, fruit) => sumVal = sumVal + fruit.value, 0);
      setSum(sumVal);
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
