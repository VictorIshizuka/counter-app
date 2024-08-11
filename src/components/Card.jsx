import { useState } from "react";
import { ButtonReset } from "./ButtonReset";
import { CountButtons } from "./CountButtons";
import { Count } from "./Counter";
import { Title } from "./Title";

export const Card = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <div className="card-body">
        <Title />
        <Count count={count} />
        <ButtonReset setCount={setCount} />
        <CountButtons setCount={setCount} />
      </div>
    </div>
  );
};
