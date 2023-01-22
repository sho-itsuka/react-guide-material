// プリミティブ型: 1, "str", bool, 10n, Symbol(), null, undefined
// オブジェクト型: {}, [] などのプリミティブ型以外

import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  
  const changeName = (e) => {
    //setPerson({name: e.target.value, age: person.age})
    setPerson({ ...person, name: e.target.value })
  }

  const changeAge = (e) => {
    //setPerson({ name: person.name, age: e.target.value })
    setPerson({ ...person, age: e.target.value })
  }

  const reset = () => {
    setPerson({ name: "", age: "" })
  }

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age:  {person.age}</h3>
      <input
        type="text"
        value={person.name}
        onChange={changeName}
      />
      <input
        type="number"
        value={person.age}
        onChange={changeAge}
      />
      <div>
      <button onClick={reset}>リセット</button>
      </div>
    </>
  )
};

export default Example;
