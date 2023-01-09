// 三項演算子（ ? : ）

const a = true;
const b = false;

// if(a) {
//   resultA = "true";
// } else {
//   resultA = "false";
// }

// 上記if文を書き換え
let resultA = a ? "true" : "false" ;
let resultB = b ? 10     : -10 ;
console.log(resultA);
console.log(resultB);

// returnの後ろに続くことがよくある
function getResult() {
  return a ? "true" : "false";
}

console.log(getResult());
