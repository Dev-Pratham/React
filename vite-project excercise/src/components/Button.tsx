interface Prop {
  input: string;
  onClick: () => void;
  //? means the field is optional
  //   color?: string;

  color?: "primary" | "secondary" | "success" | "danger";
  //these properties are specified in bootstrap buttons
  //the inputs will only be accepted if it is one of the following
  //we can also use children type in prop input
  //prefer childern for such inputs
}

const Button = ({ input, onClick, color = "primary" }: Prop) => {
  return (
    <>
      <button type="button" className={`btn btn-${color}`} onClick={onClick}>
        {input}
      </button>
    </>
  );
};

export default Button;

//why destructuring fixes the code
// you cannot directly change or modify the prop
// directly react simply doesnot allow you to do
// it can cause unexpected behaviour as typescript enforces
// immutability

// why destructuring works?
// when destructuring you are not directly modifying
// the prop object instead you are creating a lcoal variable
// with default values
