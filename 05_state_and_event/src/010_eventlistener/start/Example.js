const Example = () => {
  const clickHundler = () => {
    alert('ボタンがクリックされました')
  };
  const clickHundler2 = () => {
    alert('これもボタンです')
  };
  
  return (
    <>
      <button onClick={clickHundler}>クリックしてね</button>
      <button onClick={clickHundler2}>クリックしてね</button>
    </>
  );
};

export default Example;
