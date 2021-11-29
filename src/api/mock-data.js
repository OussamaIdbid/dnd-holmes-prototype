
export const buildInitialData = () => {
  const mockData = {
    "task-1": { id: "task-1", content: "Completing an exam" },
    "task-2": { id: "task-2", content: "Recognizing a fake e-mail address" },
    "task-3": { id: "task-3", content: "Using the Security Coach" },
    "task-4": { id: "task-4", content: "Using the Lifeline Button" },
  };

  const initialData = {
    tasks: mockData,
    columns: {
      "column-1": {
        id: "column-1",
        title: "Current Goals",
        taskIds: Object.keys(mockData).filter((t) => t === "task-1"),
        emptyMessage: "No Goals yet assigned to this Level"

      },
      "column-2": {
        id: "column-2",
        title: "Goals",
        taskIds: Object.keys(mockData).filter((t) => t !== "task-1"),
        emptyMessage: "No goals found"
      },
    },
    columnorder: ["column-1", "column-2"],
  };

  return initialData;
};
