import styles from "./Button.module.css";

interface Props {
  children: string;
  onClear: () => void;
}

const Button = ({ children, onClear }: Props) => {
  return (
    <button className={styles.btn} onClick={onClear}>
      {children}
    </button>
  );
};

export default Button;
