// const arry = ["配列1", "配列2", "配列3"];
// console.log(arry[0]);
// console.log(arry[2]);

// 上記を分割代入で書き換え
const [a, b, c] = ["配列1", "配列2", "配列3"];
console.log(a);
console.log(b);
console.log(c);

// const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(obj.x);
// console.log(obj.y);

// 上記を分割代入で書き換え
const {x, y, z} = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
console.log(x);
console.log(y);
console.log(z);


const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

// const fnArr = (arry) => {
//   console.log("---配列---");
//   console.log(`country: ${arry[0]}`);
//   console.log(`state:   ${arry[1]}`);
//   console.log(`city:    ${arry[2]}`);
// };

// const fnObj = (objAddr) => {
//   console.log("---オブジェクト---");
//   console.log(`country: ${objAddr.country}`);
//   console.log(`state:   ${objAddr.state}`);
//   console.log(`city:    ${objAddr.city}`);
// };

// 上記を分割代入で書き換え
const fnArr = ([ country, state, city ]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state:   ${state}`);
  console.log(`city:    ${city}`);
};

// 上記を分割代入で書き換え
const fnObj = ({ country, state, city }) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state:   ${state}`);
  console.log(`city:    ${city}`);
};

fnArr(arr);
fnObj(objAddress);
