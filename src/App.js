import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/NavBar/NavBar";
import Tasklist from "../src/components/TaskList/TaskList";

let addId = 0;
const generateId = () => {
  addId = addId + 1;
  return addId;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, status) => {
    const newTask = {
      id: generateId(),
      title,
      status,
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, status) => {
    console.log("updateTask func called");
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, status };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Tasklist
          title="Backlog"
          onAddTask={addTask}
          taskStatus="Backlog"
          tasks={tasks.filter((t) => t.status === "Backlog")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <Tasklist
          title="To Do"
          onAddTask={addTask}
          taskStatus="To Do"
          tasks={tasks.filter((t) => t.status === "To Do")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <Tasklist
          title="Done"
          onAddTask={addTask}
          taskStatus="Done"
          tasks={tasks.filter((t) => t.status === "Done")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
