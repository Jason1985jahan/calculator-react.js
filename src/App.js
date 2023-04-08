

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
    // کدی که قرار است هر بار state تغییر کند، اجرا شود
    // console.log(count);
  // }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default App;
