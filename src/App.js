import { useState } from "react";
import ContainerWindow from "./ContainerWindow";
import { ReactComponent as BlobPurple } from "./Animations/blobanimation.svg";
import { ReactComponent as BlobShort } from "./Animations/blobshort.svg";
import TaskList from "./TaskList";
import Modal from "./Modal";
import EditWindow from "./EditWindow";
import Form from "./Form";

// {
//   taskName: "Name",
//   taskPlace: "Belgrade",
//   startDate: new Date().toDateString(),
//   endDate: "12.12.2024",
// },

export default function App() {
  const [closed, setClosed] = useState(false);

  const [editClass, setEditClass] = useState(false);

  const [secretbtn, setSecretBtn] = useState(true);

  //So i need to fix the array of task push it needs to update

  const [arrayOfTasks, setArrayOfTasks] = useState([]);

  console.log(arrayOfTasks);

  return (
    <div className="app">
      {secretbtn ? (
        <button
          className="btn-white secret-btn"
          onClick={() => {
            setEditClass(true);
            setSecretBtn(!secretbtn);
          }}
        >
          <p>Edit</p>
        </button>
      ) : (
        ""
      )}
      <BlobPurple className="blob-left" />

      {!closed ? (
        <Modal>
          <Form
            arrayOfTasks={arrayOfTasks}
            closed={closed}
            setClosed={setClosed}
            setArrayOfTasks={setArrayOfTasks}
          />
        </Modal>
      ) : (
        <>
          <TaskList
            arrayOfTasks={arrayOfTasks}
            setEditClass={setEditClass}
            editClass={editClass}
          />
          <ContainerWindow
            arrayOfTasks={arrayOfTasks}
            setEditClass={setEditClass}
            editClass={editClass}
            setClosed={setClosed}
          />
        </>
      )}

      {editClass ? (
        <Modal>
          <EditWindow
            // finish={finish}
            // setFinish={setFinish}
            // checked={checked}
            // setChecked={setChecked}
            secretbtn={secretbtn}
            setSecretBtn={setSecretBtn}
            arrayOfTasks={arrayOfTasks}
            setArrayOfTasks={setArrayOfTasks}
            setEditClass={setEditClass}
            editClass={editClass}
          />
        </Modal>
      ) : null}
    </div>
  );
}
