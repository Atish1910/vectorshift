import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  label,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div className="node">
      <div className="node-header">{label}</div>

      {inputs.map((input) => (
        <Handle
          key={input.id}
          type="target"
          id={input.id}
          position={Position.Left}
          style={{ top: "auto", bottom: "auto" }}
        />
      ))}

      <div className="node-body">{children}</div>

      {outputs.map((output) => (
        <Handle
          key={output.id}
          type="source"
          id={output.id}
          position={Position.Right}
          style={{ top: "auto", bottom: "auto" }}
        />
      ))}
    </div>
  );
};
