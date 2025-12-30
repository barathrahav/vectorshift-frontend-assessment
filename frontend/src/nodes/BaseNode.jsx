import { Handle, Position } from "reactflow";

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  width = 200,
  height = "auto",
  children
}) => {
  return (
    <div className="node">

      {/* INPUT HANDLES */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
        />
      ))}

      {/* HEADER */}
      <div>
        <strong>{title}</strong>
      </div>

      {/* BODY */}
      <div>{children}</div>

      {/* OUTPUT HANDLES */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};
