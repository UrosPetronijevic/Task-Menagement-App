import PreviewTask from "./PreviewTask";

export default function TaskList({ arrayOfTasks, setEditClass, editClass }) {
  let arrayOfTasksCopy = [...arrayOfTasks];

  console.log(arrayOfTasksCopy, "t");
  return (
    <div
      className="tasklist-container"
      style={{ display: `${editClass ? "none" : ""}` }}
    >
      <div className="tasklist">
        {arrayOfTasksCopy.slice(-8).map((task, i) => (
          <div key={i}>
            <PreviewTask taskName={task.taskName} />
          </div>
        ))}
      </div>
      <div className="btn-white" onClick={() => setEditClass(true)}>
        <span>Edit Task</span>
      </div>
    </div>
  );
}
