import { ReactComponent as CpuIcon } from "./Animations/cpu.svg";

export default function PreviewTask({ taskName }) {
  return (
    <div className="preview-task">
      <div className="task-icon">
        <CpuIcon />
      </div>
      <p>{taskName}</p>
    </div>
  );
}
