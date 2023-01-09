const arry = [10, 20, 30, 40];
const newArry = [];

// for文で表現
for(let i = 0; i < arry.length; i++) {
  newArry.push(arry[i] * 2)
}

console.log(newArry);

// mapメソッドを使用
const newArry2 = arry.map(val => val * 2);
console.log(newArry2);