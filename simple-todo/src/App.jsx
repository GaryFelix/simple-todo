import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newTask = {
      task: task,
      desc: desc,
    };

    setTodos([...todos, newTask]);
    setTask("");
    setDesc("");
  }

  function handleDelete(index) {
    // Create a new array without the task at the specified index
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos); // Update the state with the new array
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <button type="submit">submit</button>
      </form>
      <section>
        <table>
          <thead>
            <tr>
              <td>Task Name</td>
              <td>Task Desc</td>
            </tr>
          </thead>
          <tbody>
            {/* {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.task}</td>
                <td>{todo.desc}</td>
              </tr>
            ))} */}
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.task}</td>
                <td>{todo.desc}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
