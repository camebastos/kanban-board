import React, { useState } from "react";
import Proptypes from "prop-types";
import "./taskitem.css";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDeleteTask,
}) {
  const [toEdit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const changeTitle = (event) => {
    const newTitle = event.target.value;
    setEditTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeypress = (event) => {
    if (event.key === "Enter") {
      setEdit(false);
      if (editTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  const onTaskStatusChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (toEdit) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editTitle}
          onChange={changeTitle}
          onKeyUp={onKeypress}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(e) => setEdit(true)}>{editTitle}</div>
        <select onChange={onTaskStatusChange} value={taskState}>
          <option value="Backlog">Backlog</option>
          <option value="To Do">To Do</option>
          <option value="Done">Done</option>
        </select>
      </div>
    );
  }
}

TaskItem.propTypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  taskState: Proptypes.string.isRequired,
};
