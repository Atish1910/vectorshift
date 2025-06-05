// toolbar.js
import { DraggableNode } from "./draggableNode";

export const Toolbar = () => {
  return (
    <>
      <div className="container-fluid p-3 bg-light border rounded mb-3 ">
        <div className="row">
          <h5 className="col-lg-12 mb-3 text-center">Available Nodes</h5>
          <DraggableNode nodeType="customInput" label="Input" />
          <DraggableNode nodeType="llm" label="LLM" />
          <DraggableNode nodeType="customOutput" label="Output" />
          <DraggableNode nodeType="text" label="Text" />
        </div>
      </div>
    </>
  );
};
