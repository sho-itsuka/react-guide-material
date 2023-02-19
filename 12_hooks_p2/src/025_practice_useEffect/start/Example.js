import { useState, useEffect } from 'react';

const Example = () => {
  const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   if (checked) {
  //   window.alert('checked!')
  //   }
  // }, [checked]);

  useEffect(() => {
    checked && window.alert('clicked!')
  })

  return (
    <>
      <label>
        <input
          type={'checkbox'}
          value={checked}
          onClick={() => setChecked((checked) => !checked)} />
        click me
      </label>
    </>
  );
};

export default Example;
