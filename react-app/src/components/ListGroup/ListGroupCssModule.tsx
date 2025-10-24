import {useState} from 'react';
import styles from './ListGroupCssModule.module.css';

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({items, heading}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className={styles['list-group-css-module']}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* This way of naming the element (camel case) is better so that you can use dot notation rather than the array method above */}
      <ul className={styles.listGroupCssModule}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <ul className={[styles.listGroupCssModule, styles.myContainer].join(' ')}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
