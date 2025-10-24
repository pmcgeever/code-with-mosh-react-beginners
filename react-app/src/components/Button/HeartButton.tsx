import {GoHeart} from 'react-icons/go';
import {GoHeartFill} from 'react-icons/go';
import styles from './HeartButton.module.css';
import {useState} from 'react';

interface Props {
  onSelectHandler: () => void;
  initialSelectState?: boolean;
}

const HeartButton = ({onSelectHandler, initialSelectState = false}: Props) => {
  const [selected, setSelected] = useState(initialSelectState);
  const onClickHandler = () => {
    setSelected(!selected);
    onSelectHandler();
  };

  return selected ? (
    <GoHeartFill
      size={40}
      className={styles.selected}
      onClick={onClickHandler}
    />
  ) : (
    <GoHeart size={40} onClick={onClickHandler} />
  );
};

export default HeartButton;
