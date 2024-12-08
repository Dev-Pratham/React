import { ReactNode } from "react";

//interface to define the shape of prop
interface Prop {
  //special prop that all component support
  children: ReactNode;
}

const Alert = (prop: Prop) => {
  return <div className="alert alert-primary">{prop.children}</div>;
};

export default Alert;

//make it dynamic pass a text as a prop
