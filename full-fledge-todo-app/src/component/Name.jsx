import { useState } from "react";

export default function Name() {
  let [names, setName] = useState("");
  function changed() {
    setName("Lokesh");
  }
  return (
    <div>
      My name is {names}
      <button onClick={changed}>Changed</button>
    </div>
  );
}
