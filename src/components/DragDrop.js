/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { buildInitialData } from "./../api/mock-data";
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
    }
    setInitialData(newState);
  };

  const data = () => {
    if (Object.keys(initialData).length === 0) return;

    console.log(initialData);
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        {initialData.columnorder.map((columnId) => {
          const column = initialData.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => initialData.tasks[taskId]
          );

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  };

  return <div>{data()}</div>;
};

export default DragDrop;
