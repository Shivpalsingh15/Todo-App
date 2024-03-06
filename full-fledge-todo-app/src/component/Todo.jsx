import React from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todo() {
  const [task, setTask] = React.useState("");
  const [allTask, setAllTask] = React.useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
    // console.log("chage evrnt is tigered...", e.target.value);
  };
  //   console.log(uuidv4());
  //   console.log(task);
  const handleClick = () => {
    console.log("button");
    setAllTask([...allTask, { newTask: task, id: uuidv4(), isDone: false }]);
    setTask("");
  };
  const deleteTask = (id) => {
    // console.log("id:", meriid);
    setAllTask(allTask.filter((obj) => obj.id != id));
    // console.log('output:', output)
  };

  const togglestatus = (id) => {
    // setAllTask(
    //   allTask.map((obj) =>
    //     obj.id == id ? { ...obj, isDone: !obj.isDone } : obj
    //   )
    // );
    setAllTask(
      allTask.map((obj) => {
        if (obj.id == id) {
          return { ...obj, isDone: !obj.isDone };
        }
        return obj;
      })
    );
  };

  return (
    <div>
      <h2>My todo app</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <input
          type="text"
          placeholder="write your todos.."
          onChange={handleChange}
          value={task}
        />

        <button
          id="addbtn"
          disabled={task ? false : true}
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
      {/* // mapping here */}
      <table>
        <tr>
          <th>Sr. no.</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Toggle</th>
          <th>Delete</th>
        </tr>

        {allTask.map((obj, index) => (
          <tr key={obj.id}>
            <td>{index + 1}</td>
            <td>{obj.newTask}</td>
            <td>
              <p>
                {" "}
                {!obj.isDone ? (
                  <i className="fa-regular fa-heart"></i>
                ) : (
                  <i className="fa-solid fa-heart"></i>
                )}
                <span style={{ color: !obj.isDone ? "black" : "green" }}>
                  {" "}
                  {!obj.isDone ? "Pending" : "Completed"}
                </span>
              </p>
            </td>
            <td className="togglebtn" onClick={() => togglestatus(obj.id)}>
              Toggle status
            </td>
            <td className="deletebtn" onClick={() => deleteTask(obj.id)}>
              Delete Task
            </td>
          </tr>
        ))}
      </table>
      {/* <div>
        <ol>
          {allTask.map((obj, index) => (
            <div style={{ display: "flex", gap: "20px" }} key={obj.id}>
              <li>{obj.newTask}</li>
              <br />
              <br />
              {!obj.isDone ? (
                <i className="fa-regular fa-heart"></i>
              ) : (
                <i className="fa-solid fa-heart"></i>
              )}

              <br />
              <br />
              <span style={{ color: !obj.isDone ? "black" : "green" }}>
                {!obj.isDone ? "Pending" : "Completed"}
              </span>
              <br />
              <button onClick={() => togglestatus(obj.id)}>
                Toggle status
              </button>
              <button onClick={() => deleteTask(obj.id)}>Delete Task</button>
            </div>
          ))}
        </ol>
      </div> */}
      <div></div>
    </div>
  );
}
