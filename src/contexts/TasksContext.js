import { createContext, useState } from "react";

export const TasksContext = createContext({
  tasks: [],
  setTasks: () => {}
});

export function TasksContextProvider ({ initialData, children }) {
  const [tasks, setTasks] = useState(initialData);
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      { children }
    </TasksContext.Provider>
  )
}