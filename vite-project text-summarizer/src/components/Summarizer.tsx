import Button from "./Button";

import { useState } from "react";

interface Props {
  children: string;
  maxLength?: number;
}

const Summarizer = ({ children, maxLength = 100 }: Props) => {
  const [more, setMore] = useState(false);

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
