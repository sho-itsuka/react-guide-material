function fn(number) {
  return number * 2;
}
console.log(fn(2))

// 上記を無名関数に書き換え
// const fn = function(number) {
//   return number * 2;
// }

// アロー関数
// const fnArrow = (number) => {
//   return number * 2;
// }
// console.log(fnArrow(2));

// 上記アロー関数を簡略化
// 引数が1つの場合は()を省略できる
// 1行の場合は{}を省略できる
const fnArrow = number => number * 2;
console.log(fnArrow(2));

const fnArrow2 = number => {
  console.log(number)
  number * 2;
}
console.log(fnArrow2(2));

// オブジェクトの場合、オブジェクトリテラルを使用
const fnArrowObj = number => ({result: number * 2})