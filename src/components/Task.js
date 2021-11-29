import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "react-beautiful-dnd";

const Task = (props) => {
  const { task, index } = props;

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div className="task-item"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        is={snapshot.isDragging}
        >
          <FontAwesomeIcon
            className="task-icon"
            icon={faBullseye}
            size="lg"
            color="#CFCFCF"
          />
          <p className="task-text">{task.content}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
