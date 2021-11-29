/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { buildInitialData } from "./../api/mock-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

import Column from "./Column";

const DragDrop = () => {
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    const data = buildInitialData();

    setInitialData(data);
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (destination.droppableId !== source.droppableId) {
      const destinationColumn = initialData.columns[destination.droppableId];
      const sourceColumn = initialData.columns[source.droppableId];
      const newTaskIds = Array.from(sourceColumn.taskIds);
      const newTaskIdsDestination = Array.from(destinationColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIdsDestination.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        taskIds: newTaskIds,
      };

      const destColumn = {
        ...destinationColumn,
        taskIds: newTaskIdsDestination,
      };

      const newState = {
        ...initialData,
        columns: {
          ...initialData.columns,
          [newColumn.id]: newColumn,
          [destColumn.id]: destColumn,
        },
      };
      setInitialData(newState);
    } else {
      const column = initialData.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      };

      const newState = {
        ...initialData,
        columns: {
          ...initialData.columns,
          [newColumn.id]: newColumn,
        },
      };
      setInitialData(newState);
    }
  };

  const data = () => {
    if (Object.keys(initialData).length === 0) return;

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        {initialData.columnorder.map((columnId, index) => {
          const column = initialData.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => initialData.tasks[taskId]
          );

          return index === 0 ? (
            <>
              <Column key={column.id} column={column} tasks={tasks} />
              <div className="info-text fade-out">
                <p className="info-text-content" style={{ color: "#867B79" }}>
                  Add a goal by dragging and dropping
                </p>
                <FontAwesomeIcon icon={faHandPointer} color="#867B79" />
              </div>
            </>
          ) : (
            <Column key={column.id} column={column} tasks={tasks} />
          );
        })}
      </DragDropContext>
    );
  };

  return <div className="layout">{data()}</div>;
};

export default DragDrop;
