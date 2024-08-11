export const CountButtons = ({ setCount }) => {
  return (
    <div className="d-flex">
      <button
        className="btn btn-primary w-50 p-3 m-1"
        style={{ fontSize: "50px" }}
        onClick={() => setCount(prevState => prevState - 1)}
      >
        -
      </button>
      <button
        className="btn btn-primary w-50 p-3 m-1"
        style={{ fontSize: "50px" }}
        onClick={() => setCount(prevState => prevState + 1)}
      >
        +
      </button>
    </div>
  );
};
