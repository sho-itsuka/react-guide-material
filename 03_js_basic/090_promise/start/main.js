// 非同期処理(Promise)

// 通常の処理(上から順に処理される)
// 0と表示される
let a = 0;
console.log(a);

// 順番によらずに同時に処理される
// 1と表示される
// rejectは何か不具合が生じた時(error等)に使用
new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
  }, 2000)
}).then((b) => {
  console.log(b);
})