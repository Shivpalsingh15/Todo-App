import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todoall.css";


export default function Newtodo() {
  const [text, setText] = useState("");
  const [newTask, setNewtask] = useState([]);

  let handleChange = (event) => {
    setText(event.target.value);
  };
  //------------------------------------------------------------------------
  let newTodo = () => {
    setNewtask([...newTask, { newText: text, id: uuidv4(), isDone: false }]);
    console.log("text:", text);
    setText("");
  };

  //--------------------------------------------------------------------------
  let deletetask = (id) => {
    setNewtask(newTask.filter((el) => el.id != id));
    console.log("copy:", id);
  };
  console.log("text1:", newTask);
  console.log("uuidv4:", uuidv4());

  //-----------------------------------------------------------------------------
  // let update = ()=>{
  //   let copy = newTask.map((obj)=>{[...obj, obj.newText]})
  //   console.log('copy:', copy)
  // }

  // let update = ()=>{
  //   setNewtask(newTask.map((map)=>{return{...map, newText: map.newText.toUpperCase()}}))

  // }
  let update = (id) => {
    setNewtask(
      newTask.map((map) => {
        if(map.id===id)
        return { ...map, newText: map.newText.toUpperCase() }
      else{return map}
      })
    );
  };
  //-----------------------------------------------------------------------------
  let done = (id) =>{
    setNewtask((prev) =>
      prev.map((map) => {
        if (map.id === id) {
          return { ...map, isDone: true, };
        } else {
          return map;
        }
      })
    );
  };

  

  //-----------------------------------------------------------------------------
  return (
    <div className="main">
      <h2>Todo for all days.</h2>
      <input
        type="text"
        placeholder="Enter your todo's"
        value={text}
        onChange={handleChange}
      />
      &nbsp;&nbsp;
      <button type="button" onClick={newTodo}>
        Add New Todo's
      </button>
      <div>
        {newTask.map((obj) => (
          <div>
            <li key={obj.id}>
              {obj.newText}
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => deletetask(obj.id)}>Delete todo</button>
              <button onClick={() => update(obj.id)}>All Task update</button>
              {/* <button onClick={() => done(obj.id)}>Mark as done</button> */}
              {/* {!obj.isDone ? (
                <i className="fa-regular fa-heart"></i>
              ) : (
                <i className="fa-solid fa-heart"></i>
              )} */}
            </li>
          </div>
        ))}
      </div>
      {/* <button onClick={update}>All Task update</button> */}
    </div>
  );
}
