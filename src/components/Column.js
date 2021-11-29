import React from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Column = (props) => {
  const { column, tasks } = props;

  return (
    <div className="container">
      <div className="header">
        <h1>{column.title}</h1>
      </div>
      <div className="task-container">
        <Droppable droppableId={column.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))
              ) : (
                <h1 className="no-item">No Goals yet assigned to this Level</h1>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Column;
