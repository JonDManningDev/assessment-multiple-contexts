import Tasks from "./Tasks/Tasks";
import Sales from "./Sales/Sales";

function Dashboard({ sales }) {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Tasks />
        </div>
        <div className="col">
          <Sales sales={sales} />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
