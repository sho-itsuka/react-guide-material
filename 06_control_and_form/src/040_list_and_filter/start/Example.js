import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [ filterVal, setFilterVal ] = useState("");

  return (
    <>
      <h3>配列のフィルター</h3>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => {
          setFilterVal(e.target.value)
        }}
      />
      <ul>
        {animals
        // filter():  配列の中から、提供された関数で実装されたテストに合格した要素(true)のみを抽出
        // indexOf(): 呼び出す String オブジェクト中で、 fromIndex から検索を始め、指定された値が最初に現れたインデックスを返す。値が見つからない場合は -1 を返す。
        .filter(animal => animal.indexOf(filterVal) !== -1)
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
