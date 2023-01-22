
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {

  // return (
  //   <>
  //     <h3>配列の操作</h3>
  //     <ul>
  //       <li>Hello, {animals[0]}</li>
  //       <li>Hello, {animals[1]}</li>
  //       <li>Hello, {animals[2]}</li>
  //     </ul>
  //   </>
  // );


  // 1. あまり使用しないがfor文で記述(文はJSX内に記述できない)

  // 配列の初期化
  const animalList = [];
  for(const animal of animals) {
    // push(): 配列の要素を先頭から順次追加するメソッド
    animalList.push(<li>{animal}</li>);
  }

  // 2. map()メソッドを使用(こちらは式なのでJSX内にも記述できる)
  const helloAnimals = animals.map((animal) => 
    <li>Hello, {animal}</li>
  )

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animalList}
        {helloAnimals}
        {/* 以下は式なので直接記述できる */}
        {animals.map((animal) => <li>Hello, {animal}</li>)}
      </ul>
    </>
  )
};

export default Example;
