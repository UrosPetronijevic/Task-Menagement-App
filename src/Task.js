import { useState } from "react";

export default function Task({
  taskName,
  taskPlace,
  startDate,
  endDate,
  //   checked,
  //   setChecked,
  //   finish,
  //   setFinish,
  arrayOfTasks,
  setArrayOfTasks,
  id,
  completion,
}) {
  const [edit, setEdit] = useState(false);

  const [editName, setEditName] = useState("");
  const [editPlace, setEditPlace] = useState("");
  const [editEndDate, setEditEndDate] = useState(1);

  const [checked, setChecked] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleDone = (e) => {
    e.preventDefault();

    let editedElement = {
      taskName: editName,
      taskPlace: editPlace,
      startDate: startDate,
      endDate:
        editEndDate < 2
          ? `Ends in ${editEndDate} day`
          : `Ends in ${editEndDate} days`,
      id: id,
      completion: checked,
    };
    const elPosition = [...arrayOfTasks].findIndex((e) => e.id === id);

    let editedArrayOfTasks1 = [...arrayOfTasks].slice(
      elPosition + 1,
      arrayOfTasks.length
    );

    let editedArrayOfTasks2 = [...arrayOfTasks].slice(
      arrayOfTasks[0],
      elPosition
    );

    editedArrayOfTasks2.push(editedElement);

    let editedArrayOfTasks = [...editedArrayOfTasks2, ...editedArrayOfTasks1];

    setArrayOfTasks((arrayOfTasks) => editedArrayOfTasks);

    setEdit(!edit);
  };

  return (
    <form
      className={`task ${edit} ${completion ? "finished" : ""}`}
      onSubmit={handleDone}
    >
      {!edit ? (
        <>
          <p>{taskName}</p>
          <p>{taskPlace}</p>
          <p>{startDate}</p>
          <p>{endDate}</p>
          {!completion ? (
            <div className="btn-brown" onClick={handleEdit}>
              Edit
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
      {edit ? (
        <>
          <input
            placeholder="Pick a name any name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            placeholder="Place?"
            value={editPlace}
            onChange={(e) => setEditPlace(e.target.value)}
          />
          <p>{startDate}</p>
          <div>
            <select
              value={editEndDate}
              onChange={(e) => setEditEndDate(+e.target.value)}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num < 2 ? `${num} day` : `${num} days`}
                </option>
              ))}
            </select>
          </div>
          <div className="completed">
            <input
              type="checkbox"
              value={checked}
              onChange={() => setChecked(!checked)}
            />
            <p>Completed</p>
          </div>
          <button className="btn-brown">Done</button>
        </>
      ) : (
        ""
      )}
    </form>
  );
}
