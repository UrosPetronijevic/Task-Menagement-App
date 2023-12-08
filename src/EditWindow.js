import Task from "./Task";

export default function EditWindow({
  arrayOfTasks,
  setArrayOfTasks,
  editClass,
  setEditClass,
  checked,
  setChecked,
  finish,
  setFinish,
  secretbtn,
  setSecretBtn,
}) {
  let editArrayOfTasks = [...arrayOfTasks];

  return (
    <div className="editwindow">
      <div className="close-edit-window">
        <span
          onClick={(e) => {
            setEditClass(!editClass);
            setSecretBtn(!secretbtn);
          }}
        >
          X
        </span>
      </div>

      {editArrayOfTasks.slice(-7).map((task, i) => (
        <Task
          checked={checked}
          setChecked={setChecked}
          finish={finish}
          setFinish={setFinish}
          id={task.id}
          arrayOfTasks={arrayOfTasks}
          setArrayOfTasks={setArrayOfTasks}
          taskName={task.taskName}
          taskPlace={task.taskPlace}
          startDate={task.startDate.slice(-11)}
          endDate={task.endDate}
          taskExplanation={task.task}
          completion={task.completion}
        />
      ))}
    </div>
  );
}
