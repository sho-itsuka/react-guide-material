// 渡ってきた引数を関数として実行
function print(callback) {
  const result = callback();
  console.log(result);
}

function fn(number = 3) {
  return number * 2;
}

// 実行結果: 6
print(fn);