import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { SalesContext } from "../contexts/SalesContext";

function CurrentStats() {
  const { tasks } = useContext(TasksContext);
  const completedTasks = tasks.filter((task) => task.complete).length;

  const { sales } = useContext(SalesContext);

  return (
    <section id="current-stats" className="container">
      <div className="row my-4">
        <div className="col align-items-stretch">
          <aside
            style={{ height: "100%" }}
            className="p-5 bg-primary-subtle d-flex align-items-center justify-content-center"
          >
            <h2 className="text-dark text-center">
              <span className="display-5 text-primary">{completedTasks}</span>
              <br />
              Tasks Completed
            </h2>
          </aside>
        </div>
        <div className="col col-xs-12 align-items-stretch">
          <aside
            style={{ height: "100%" }}
            className="p-5 bg-danger-subtle d-flex align-items-center justify-content-center"
          >
            <h2 className="text-dark text-center">
              <span className="text-danger display-5">{ sales.length }</span>
              <br />
              Sales
            </h2>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default CurrentStats;
