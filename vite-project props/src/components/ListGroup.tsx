import { Fragment, useState } from "react";

// import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
}

//destructuring of prop parameter can be used
//for removing the use of props.
function ListGroup(props: Props) {
  // let items = ["Engineer", "Doctor", "Scientist", "Dietesian"];

  // let selectedIndex = 0;

  //use state is a hook in
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // items = [];

  // const message = items.length === 0 ? <h1>No list Found </h1> : null;

  const getMessage = () => {
    // return items.length === 0 ? <h1>No items found</h1> : null;
    return props.items.length == 0 && <h1>No items found</h1>;
  };

  //can also create handle click
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  //MouseEvent is the type of event parameter
  // which is required by
  //type script

  // it doesnot know the type of the parameter as we have created a brand new
  // function and typeScript does not know where we are gonnna use it

  // event : MouseEvent is called type annotation in typeScript with type annotation we can specify the type of variables paramters and so on

  //with dot operator we can see all the properties associalted with the event this is the baauty of typeScript
  // };

  return (
    // <h1>dffdfdf</h1> this will throw error because in react we
    // cannot return more than one element
    <Fragment>
      <h1> {props.heading} </h1>
      {/* inline conditional */}
      {/* {items.length === 0 ? <h1>No list Found </h1> : null} */}

      {/* conditional with the help of variables */}
      {/* {message} */}

      {/* conditionals using functions */}
      {getMessage()}

      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);

              //this will not work we have to use a state
              // selectedIndex = index;
              // console.log(selectedIndex);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
    //read copy for fragmentation
  );
}

export default ListGroup;
