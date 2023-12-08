export default function Overview({
  children,
  taskName,
  taskPlace,
  startDate,
  endDate,
}) {
  return (
    <div
      className="overview"
      style={
        endDate === "Ends Tomorrow"
          ? { backgroundColor: "red" }
          : { backgroundColor: "ivory" }
      }
    >
      <p>{taskName}</p>
      <p>{taskPlace}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      {children}
    </div>
  );
}
