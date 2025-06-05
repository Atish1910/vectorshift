import { useEffect, useState } from "react";
import { BaseNode } from "./BaseNode";

// Extract valid JS variable names inside {{ }}
const extractVariables = (text) => {
  const regex = /{{\s*([\w$][\w\d$]*)\s*}}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text)) !== null) {
    vars.add(match[1]);
  }
  return Array.from(vars);
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [vars, setVars] = useState([]);

  useEffect(() => {
    const extracted = extractVariables(currText);
    setVars(extracted);
  }, [currText]);

  // Dynamically create input handles
  const inputHandles = vars.map((v) => ({
    id: `${id}-${v}`,
    label: v,
    position: "left", // required for some diagram libraries
  }));

  const outputHandles = [{ id: `${id}-output`, label: "Output" }];

  return (
    <BaseNode
      id={id}
      label="Text"
      inputs={inputHandles}
      outputs={outputHandles}
    >
      <label>
        Text:
        <textarea
          className="autosize-textarea"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
