import styles from "./Button.module.css";

interface Props {
  children: string;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
}

const Button = ({ children, type = "submit", onClick }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
