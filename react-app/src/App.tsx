import {useState} from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import {IoCalendarClear} from 'react-icons/io5';
import MyButton from './components/Button/Button';
import HeartButton from './components/Button/HeartButton';

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const cities = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  return (
    <div>
      <ListGroup items={cities} heading="Cities" />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        Test
      </Button>
      <IoCalendarClear color="red" size={40} />
      <MyButton variant="primary" onClick={() => {}}>
        My Custom Button
      </MyButton>
      <br />
      <HeartButton
        onSelectHandler={() => {
          console.log('clicked');
        }}
      ></HeartButton>
    </div>
  );
}

export default App;
