import { Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import CurrentStats from "./components/CurrentStats";
import Dashboard from "./components/Dashboard/Dashboard";
import NoMatch from "./components/common/NoMatch";

import { TasksContextProvider } from "./contexts/TasksContext";
import { SalesContextProvider } from "./contexts/SalesContext";

import tasksData from "./data/tasks.json";
import salesData from "./data/sales.json";

function App() {
  return (
    <>
      <Header />
      <TasksContextProvider initialData={tasksData}>
        <SalesContextProvider initialData={salesData}>
          <CurrentStats />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </SalesContextProvider>
      </TasksContextProvider>
    </>
  );
}

export default App;
