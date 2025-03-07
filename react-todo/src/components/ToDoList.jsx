import React from "react";
import AddTodoForm from "./AddTodoForm";
import { useState } from "react";
function TodoList() {
  const [tasks, setTasks] = useState([]);

  function addToDo(task) {
    console.log(task);
    setTasks((t) => [...t, task]);
  }

  function deleteToDo(id) {
    console.log("Delete task");
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
  }

  function toggleToDo(id) {
    console.log("Toggle task");
    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, complete: !t.complete } : t
    );
    setTasks(newTasks);
  }
  return (
    <div>
      <AddTodoForm addToDo={addToDo} />
      <hr />
      <h3>Tasks</h3>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, i) => (
            <div key={i}>
              <li
                onClick={() => toggleToDo(task.id)}
                style={{
                  textDecoration: task.complete ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {i + 1}: {task.title}{" "}
                <small style={{ color: task.complete ? "green" : "yellow" }}>
                  || {task.complete ? "<Completed>" : "<Not Completed>"}
                </small>
              </li>
              <button onClick={() => deleteToDo(task.id)}>Delete</button>
            </div>
          ))
        ) : (
          <li>No tasks set</li>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
