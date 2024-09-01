import React, { useState, useEffect } from "react";
import AddTasks from "./AddTasks.js";
import TaskItems from "./TaskItems.js";

const TodoApp = () => {
  const [tasks, setTasks] = useState(()=>{
    const localData = localStorage.getItem("tasks");
    return localData? JSON.parse(localData) : [];
  } );
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTAsk = { text: taskText, completed: false };
    setTasks([...tasks, newTAsk]);
  };

  const toggleTask = (index) => {
    const updateTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updateTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todoApp">
      <h1>Liste de Tâches</h1>
      <AddTasks addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <TaskItems
            key={index}
            task={task}
            toggleTask={() => toggleTask(index)}
            deleteTask={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
