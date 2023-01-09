const nums = [3, 1, 4, 1, 5, 10, 2, 6];
// スプレッド演算子で再記述を省略
const result = Math.max(...nums);
console.log(result);

// 配列で実行
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1];
let newArr1 = [...arr1, ...arr2]
console.log(newArr);
console.log(newArr1);

// オブジェクトで実行
const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };

console.log(newObj);


// 関数で実行
const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)
