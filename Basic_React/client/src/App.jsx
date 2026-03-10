import {useState} from 'react';

const App =() =>{
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  }
  const handledecrement = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }



  return (
    <>
      <h1>Counter Basic Project Day first</h1>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>+</button>
      <button onClick={handledecrement}>-</button>
      <button  onClick={handleReset}>Reset</button>
 

      
    </>
  )
}

export default App;
