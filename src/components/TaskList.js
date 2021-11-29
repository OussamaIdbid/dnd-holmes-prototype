import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const { tasks } = props;

  return tasks.map((task, index) => {
    return <Task key={task.id} task={task} index={index} />;
  });
};

export default TaskList;
