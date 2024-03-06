// import React, { useEffect, useState } from "react";

// function Eff(props) {
//   let [count, setCount] = useState(0);
//   //   console.log("componet is rendering ...");

//   useEffect(() => {
//     console.log("componet is rendering ...");
//   }, [count]);
//   return (
//     <div>
//       <h4>UseEffect...</h4>
//       <p>Count = {count}</p>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// }

// export default Eff;

// function yes() {
//   fetch("https://api.example.com/data")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error("Error:", error));
// }

// async function yes2() {
//   let response = await fetch("https://api.example.com/data");
//   let myJson = await response.json();
//   console.log(myJson);
// }
