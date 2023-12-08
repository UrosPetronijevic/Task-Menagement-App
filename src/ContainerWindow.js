import TaskBox from "./TaskBox";
import Overview from "./Overview";
import OverviewContainer from "./OverviewContainer";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

import { ReactComponent as Complete } from "./Animations/check-circle.svg";
import { ReactComponent as Add } from "./Animations/file-plus.svg";
import { ReactComponent as Inprogress } from "./Animations/alert-circle.svg";

export default function ContainerWindow({
  arrayOfTasks,
  editClass,
  setEditClass,
  setClosed,
}) {
  const [copyArrayofTasks, setCopyArrayOfTasks] = useState([...arrayOfTasks]);

  return (
    <div
      className="container"
      style={{ display: `${editClass ? "none" : ""}` }}
    >
      <div className="task-container">
        <TaskBox
          icon={<Complete />}
          text={"Completed tasks"}
          percent={"100%"}
          progressbarLenght={"progress-full"}
          btnName={"Sort"}
          setCopyArrayOfTasks={setCopyArrayOfTasks}
          arrayOfTasks={arrayOfTasks}
          truthy={true}
          complete={
            [...arrayOfTasks].filter((e) => e.completion === true).length
          }
        />
        <TaskBox
          icon={<Inprogress />}
          text={"In progress"}
          percent={"55%"}
          progressbarLenght={"progress-incomplete"}
          btnName={"Sort"}
          setCopyArrayOfTasks={setCopyArrayOfTasks}
          arrayOfTasks={arrayOfTasks}
          truthy={false}
          complete={
            [...arrayOfTasks].filter((e) => e.completion === false).length
          }
        />
        <TaskBox
          icon={<Add />}
          text={"New tasks"}
          percent={"0%"}
          progressbarLenght={"progress-null"}
          btnName={"Add Task"}
          arrayOfTasks={arrayOfTasks}
          setClosed={setClosed}
          complete={
            [...arrayOfTasks].filter(
              (e) => e.startDate === new Date().toDateString()
            ).length
          }
        />
      </div>
      <OverviewContainer>
        {[...copyArrayofTasks].slice(-3).map((task, i) => {
          return (
            <Overview
              taskName={task.taskName}
              taskPlace={task.taskPlace}
              startDate={task.startDate.slice(-11)}
              endDate={task.endDate}
            >
              <ProgressBar
                progressbarLenght={
                  task.completion ? "progress-full" : "progress-incomplete"
                }
              />
            </Overview>
          );
        })}
      </OverviewContainer>
    </div>
  );
}
