import styles from "./Button.module.css";

interface Props {
  children: string;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, type, onClick, disabled }: Props) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
