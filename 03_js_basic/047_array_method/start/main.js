const arry = [10, 20, 30, 40];
const newArry = [];

// for(let i = 0; i < arry.length; i++) {
//     newArry.push(arry[i] * 2)
// }

// console.log(newArry);

// 上記をmapメソッドで表現
// const newArry2 = arry.map(val => {
//   return val * 2;
// });

// console.log(newArry2);


// if文で該当するものを表示
for(let i = 0; i < arry.length; i++) {
  const val = arry[i] * 2;
  if(val > 50) {
    newArry.push(arry[i] * 2)
  }
}

console.log(newArry);

// 上記をfilterメソッドで表現
const newArry2 = arry.map(val => {
  return val * 2;
});
const newArray3 = newArry2.filter(val => val > 50);
console.log(newArray2);

//1文にまとめる
// const newArry2 = arry.map(val => val * 2).filter(val => val > 50);
// console.log(newArray2);