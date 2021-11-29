import superagent from "superagent";

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
        title: "To Do",
        taskIds: Object.keys(mockData).map((d) => d),
      },
    },
    columnorder: ["column-1"],
  };

  return initialData;
};
