const h1Element = document.querySelector('h1');
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = '変更後のタイトル';

// ボタン押下後にダイアログ出力
// const btn = document.querySelector('button');
// btn.addEventListener('click', (e) => {
//   alert('hello');
// });

// addEventListenerの第二引数に関数を渡す場合
const btnFn = e => {
  alert('hello');
}
const btn = document.querySelector('button');
btn.addEventListener('click', btnFn);