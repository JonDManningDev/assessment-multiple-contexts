function Task({ task, updateTask }) {
  const color = task.complete ? "secondary" : "primary";
  return (
    <article
      className={`task bg-${color}-subtle mb-3 p-3 d-flex align-items-baseline justify-content-between gap-5`}
    >
      <p className="my-3">{task.content}</p>
      <aside style={{ minWidth: "130px " }}>
        <button
          className={`btn btn-sm btn-${color}`}
          onClick={() => updateTask(task)}
        >
          Mark {task.complete ? "Incomplete" : "Complete"}
        </button>
      </aside>
    </article>
  );
}

export default Task;
