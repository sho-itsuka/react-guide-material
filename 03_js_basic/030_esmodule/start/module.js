export const hello = () => {
  console.log("hello!");
};

const funcB = () => {
  console.log("funcB output");
};

// export default で呼び出せるのは、1つのファイルで1箇所だけ
export default funcB;

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}

// オブジェクトリテラルを使用し、Userクラスを外部から呼び出す
export { User }
