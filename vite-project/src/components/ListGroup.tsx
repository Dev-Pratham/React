import { Fragment } from "react";

function ListGroup() {
  const items = ["Engineer", "Doctor", "Scientist", "Dietesian"];

  return (
    // <h1>dffdfdf</h1> this will throw error because in react we
    // cannot return more than one element
    <Fragment>
      <h1> hello </h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
    //read copy for fragmentation
  );
}

export default ListGroup;
