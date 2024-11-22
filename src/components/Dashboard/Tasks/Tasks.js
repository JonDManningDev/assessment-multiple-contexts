import { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "../../../contexts/TasksContext";

function Tasks() {
  const { tasks, setTasks } = useContext(TasksContext);
  const updateTask = (task) => {
    const index = tasks.findIndex((el) => el.id === task.id);
    setTasks([
      ...tasks.slice(0, index),
      { ...task, complete: !task.complete },
      ...tasks.slice(index + 1),
    ]);
  };

  const taskElements = tasks.map((task) => (
    <Task key={task.id} task={task} updateTask={updateTask} />
  ));
  return (
    <section>
      <h3 className="text-center">Tasks</h3>
      <div className="d-flex flex-column mt-3">{taskElements}</div>
    </section>
  );
}

export default Tasks;
