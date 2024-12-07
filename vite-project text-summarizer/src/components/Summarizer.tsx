import Button from "./Button";

import { useState } from "react";

interface Props {
  children: string;
  maxLength?: number;
}

const Summarizer = ({ children, maxLength = 200 }: Props) => {
  const [more, setMore] = useState(false);

  if (children.length <= maxLength) {
    return <p>{children}</p>;
  }

  return (
    <>
      {more ? children : children.slice(0, maxLength) + "..."}
      <Button onClick={() => (more ? setMore(false) : setMore(true))}>
        {more ? "Less" : "More"}
      </Button>
    </>
  );
};

export default Summarizer;
