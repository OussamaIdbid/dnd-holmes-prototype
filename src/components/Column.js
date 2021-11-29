import React from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Column = (props) => {
  const { column, tasks } = props;

  console.log(tasks);
  return (
    <div className="container">
      <div className="header">
        <h1>{column.title}</h1>
      </div>
      <div className="task-container">
          {tasks.length > 0 ? 
        <Droppable droppableId={column.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        : <h1 className="no-item">No Goals yet assigned to this Level</h1>}
      </div>
    </div>
  );
};

export default Column;
