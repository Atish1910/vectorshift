// draggableNode.js
export const DraggableNode = ({ nodeType, label }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="col-2 card p-2 mb-2 me-3"
      style={{ cursor: "grab" }}
      onDragStart={onDragStart}
      draggable
    >
      <div className="card-body p-2 text-center">
        <strong>{label}</strong>
      </div>
    </div>
  );
};
