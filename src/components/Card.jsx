import { useEffect, useState } from "react";
import { Count } from "./Counter";
import { Title } from "./Title";
import { Button } from "./Button";
import { ButtonReset } from "./ButtonReset";
import { Container } from "./Container";

export const Card = () => {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === "Space") {
        setCount(prevState => (prevState >= 5 ? 5 : prevState + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [count]);

  return (
    <div className="card">
      <div className="card-body">
        <Title locked={locked} />
        <Count count={count} />
        <ButtonReset setCount={setCount} />
        <Container>
          <Button type="decrement" setCount={setCount} />
          <Button type="increment" setCount={setCount} locked={locked} />
        </Container>
      </div>
    </div>
  );
};
