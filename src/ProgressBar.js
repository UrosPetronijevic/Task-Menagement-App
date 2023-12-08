export default function ProgressBar({ progressbarLenght }) {
  return (
    <div className="progress-bar">
      <div className={progressbarLenght}></div>
    </div>
  );
}
