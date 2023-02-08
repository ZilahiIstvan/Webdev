import React from "react";

import "./TaskItem.scss";

const TaskItem = () => {
  return (
    <div className="task_item">
      <div className="task_item_title">title</div>
      <div className="task_item_subtask">1 of 3 subtasks</div>
    </div>
  );
};

export default TaskItem;
