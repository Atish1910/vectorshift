import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  return (
    <BaseNode id={id} label="Input" outputs={[{ id: `${id}-value` }]}>
      <div className="mb-2">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Type:</label>
        <select
          className="form-select"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};
