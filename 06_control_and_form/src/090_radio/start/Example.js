import { useState } from "react";

const Example = () => {
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value);
  
  const RADIO_COLLECTION = ["Apple", "banana", "cherry"];

  return (
    <>
      {RADIO_COLLECTION.map((value) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={val}
              checked={val === value}
            />
            {value}
          </label>
  );
};

export default Example;
