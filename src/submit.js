// submit.js

export const SubmitButton = ({ onClick }) => {
  return (
    <div className="text-center my-3">
      <button className="btn btn-primary px-4" onClick={onClick}>
        Submit Pipeline
      </button>
    </div>
  );
};
