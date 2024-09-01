import React from "react";

function TaskItem({task, toggleTask, deleteTask}) {
  return (
    <li className={`taskItem ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={toggleTask} />
      <span>{task.text}</span>
      <button onClick={deleteTask}>Supprimer</button>
    </li>
  );
}

export default TaskItem;
