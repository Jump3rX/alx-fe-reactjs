import React, { useState } from "react";
function AddTodoForm({ addToDo }) {
  const [task, setTask] = useState({
    id: Date.now(),
    title: "",
    complete: false,
  });
  function handleAddToDo(e) {
    setTask((t) => ({ ...t, title: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addToDo(task);
    setTask({ id: Date.now(), title: "", complete: false });
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.title}
          onChange={handleAddToDo}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
