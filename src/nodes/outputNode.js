import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  return (
    <BaseNode id={id} label="Output" inputs={[{ id: `${id}-value` }]}>
      <label>
        Name:
        <input
          type="text"
          className="form-control"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </label>
      <label>
        Type:
        <select
          value={outputType}
          className="form-control"
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text" className="form-control">
            Text
          </option>
          <option value="File" className="form-control">
            Image
          </option>
        </select>
      </label>
    </BaseNode>
  );
};
