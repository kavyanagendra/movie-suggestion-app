import Alert from './Alert';
import ListGroup from './ListGroup';
import Button from './Button'
import { useState } from 'react';

export default function App() {
  const items = ['Texas', 'Paris', 'LA'];
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup heading="Cities" items={items} onSelectedItem={handleClick} /> */}
      {alertVisibility && (
        <Alert>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}
      <Button
        text="My Button"
        handleClick={() => setAlertVisibility(!alertVisibility)}
        color="secondary"
      ></Button>
    </div>
  );
}
