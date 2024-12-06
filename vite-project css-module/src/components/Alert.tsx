interface Prop {
  //special prop
  children: string;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Prop) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
