import ProgressBar from "./ProgressBar";
import Btn from "./Btn";
export default function TaskBox({
  text,
  percent,
  progressbarLenght,
  btnName,
  complete,
  setCopyArrayOfTasks,
  arrayOfTasks,
  truthy,
  setClosed,
  icon,
}) {
  return (
    <div className="task-box">
      <div className="task-box-text">
        <div>
          <div className="img">{icon}</div>
        </div>
        <span>{complete}</span>
        <p>{text}</p>
      </div>

      <div className="task-box-props">
        <ProgressBar progressbarLenght={progressbarLenght} />
        <span>{percent}</span>
      </div>
      <div
        className="container-sort-button"
        onClick={
          btnName !== "Add Task"
            ? () =>
                setCopyArrayOfTasks(
                  [...arrayOfTasks].filter((e) => e.completion === truthy)
                )
            : () => setClosed(false)
        }
      >
        <Btn
          btnName={btnName}
          backgroundColor={"ivory"}
          color={"#4b6cb7"}
          width={"50%"}
          fontSize={"1.5rem"}
          fontWeight={"600"}
          padding={"1rem 0.5rem"}
          display={"flex"}
          justifyContent={"center"}
          borderRadius={"1rem"}
          transition={"0.5s"}
          hoverColor={"ivory"}
          hoverBackgroundColor={"#4b6cb7"}
          hoverTransition={"0.7s"}
        />
      </div>
    </div>
  );
}
