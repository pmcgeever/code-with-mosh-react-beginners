import styles from './Button.module.css';

interface Props {
  children: string;
  onClick: () => void;
  variant: string;
}

const Button = ({children, onClick, variant = 'primary'}: Props) => {
  return (
    <button
      onClick={onClick}
      className={[styles.bt, styles['btn-' + variant]].join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
