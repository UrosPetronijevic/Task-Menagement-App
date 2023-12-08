import { ReactComponent as Tletter } from "./Animations/t.svg";

import { ReactComponent as Navicon } from "./Animations/map-marker-2.svg";
import { ReactComponent as Codeicon } from "./Animations/code.svg";

import { useState } from "react";

export default function Form({
  arrayOfTasks,
  setArrayOfTasks,
  closed,
  setClosed,
}) {
  //FORM
  const [taskName, setTaskName] = useState("");
  const [taskPlace, setTaskPlace] = useState("");
  const [endDate, setEndDate] = useState("1");
  const [acceptTerms, setAcceptTerms] = useState(false);

  class TaskObj {
    constructor(taskName, taskPlace, endDate) {
      this.taskName = taskName;
      this.taskPlace = taskPlace;
      this.startDate = new Date().toDateString();
      this.endDate = `Ends ${endDate < 2 ? `Tomorrow` : `in ${endDate} days`}`;
      this.completion = false;
      this.id = new Date().getMilliseconds();
    }
  }

  function createNewObj() {
    const task = new TaskObj(taskName, taskPlace, endDate);

    setArrayOfTasks((arrayOfTasks) => [...arrayOfTasks, task]);

    // console.log(arrayOfTasks);

    // setTaskName("");
    // setTaskPlace("");
    // setEndDate("");
    // setTaskExplanation("");

    setClosed("closed");
  }

  return (
    <div className={`form ${closed}`}>
      <div className="close-form">
        <span onClick={(e) => setClosed("closed")}>X</span>
      </div>
      <h1>New Task</h1>
      <div className="input-container">
        <div>
          <Tletter />
        </div>
        <input
          type="text"
          placeholder="Name a task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          maxLength={8}
        />
      </div>
      <div className="input-container">
        <div>
          <Navicon />
        </div>
        <input
          type="text"
          placeholder="Name a place"
          maxLength={8}
          value={taskPlace}
          onChange={(e) => setTaskPlace(e.target.value)}
        />
      </div>
      <div className="input-container">
        <div>
          <Codeicon />
        </div>
        <div className="form-creation-date">
          <p>{new Date().toDateString()}</p>
        </div>
      </div>
      <div className="input-container">
        <div>
          <Codeicon />
        </div>
        <div className="select-container">
          <p>Task ends in</p>
          <select value={endDate} onChange={(e) => setEndDate(+e.target.value)}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num < 2 ? `${num} day` : `${num} days`}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="terms">
        <input
          type="checkbox"
          value={acceptTerms}
          onChange={() => setAcceptTerms(!acceptTerms)}
        />
        <p>I accept the terms of service</p>
      </div>
      {acceptTerms ? (
        <div className="submit-form" onClick={createNewObj}>
          submit
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
