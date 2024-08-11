import { RxReset } from "react-icons/rx";

export const ButtonReset = ({ setCount }) => {
  return (
    <div className="text-center">
      <button
        className="btn btn-danger"
        onClick={e => {
          setCount(0);
          e.currentTarget.blur();
        }}
      >
        <RxReset />
      </button>
    </div>
  );
};
