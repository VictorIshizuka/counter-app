export const Button = ({ type, setCount, locked }) => {
  return (
    <button
      className="btn btn-primary w-50 p-3 m-1"
      style={{ fontSize: "50px" }}
      onClick={e => {
        setCount(prevState =>
          type === "increment" && type !== "decrement"
            ? prevState < 5
              ? prevState + 1
              : prevState
            : prevState > 0
            ? prevState - 1
            : prevState
        );
        e.current.blur();
      }}
      disabled={locked}
    >
      {type === "increment" && type !== "decrement" ? "+" : "-"}
    </button>
  );
};
