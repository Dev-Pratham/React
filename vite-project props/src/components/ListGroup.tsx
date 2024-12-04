import { Fragment, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

//destructuring of prop parameter can be used
//for removing the use of props.
function ListGroup(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1> {props.heading} </h1>

      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              //created a usestate hook which tells react that
              //it will have data or state which will change over time
              //this causes component to rerender
              setSelectedIndex(index);
              //notifying parent that element has been clicked
              props.onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
