import React from "react";
import "./tasklist.css";
import plusIcon from "../../img/plus-icon.svg";

import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskStatus,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask,
}) {
  const addTask = () => {
    onAddTask("New Task", taskStatus);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            taskState={task.status}
            onTaskUpdate={onTaskUpdate}
            onDeleteTask={onDeleteTask}
          />
        ))}
        {tasks.length === 0 && <div className="empty-list">Empty List</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="Plus" />
          Add Task
        </button>
      </div>
    </div>
  );
}

TaskList.prototypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
