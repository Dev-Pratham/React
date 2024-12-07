import { useState } from "react";
import Button from "./Button";
import { produce } from "immer";

function UpdateLogicImmerLibrary() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bugs1", fixed: false },
    { id: 2, title: "Bugs2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      //this immer module is for simplifying updatre logic
      //draft is the copy of the bugs
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <Button onClick={handleClick}>Immer Library</Button>
    </>
  );
}

export default UpdateLogicImmerLibrary;
