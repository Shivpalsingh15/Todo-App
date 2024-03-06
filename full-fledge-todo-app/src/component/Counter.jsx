import { useState } from "react";

export default function Counter() {
    let[counts, setCount] = useState(0)
    // let count = 0;
    function newCount(){
        
        setCount(counts+=1)
        // console.log('count:', count)

    }
    function reset(){
        setCount(0)
    }
  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {counts}</p>
      <button onClick={newCount}>Count</button>
      <button onClick={reset}>Reset</button>
      
    </div>
  );
}
