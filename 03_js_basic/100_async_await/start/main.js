// 非同期処理（await/async）
// thenメソッドを使用せずに書き換える
let a = 0;

init();
async function init() {
  // resolve(a)が呼ばれるまで待機→resultに格納される
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      a = 1;
      resolve(a)
    }, 2000);
  })
  console.log(result);
  // }).catch((c) => {
  //     console.log('catchが実行', c)
  // })
}

// 例外処理
init();
async function init() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        a = 1;
        reject(a)
      }, 2000);
    })
    console.log(result);
  } catch(e) {
    console.log('catchが実行', e);
  }
}