import { useState } from 'react';

interface Props{
    heading: string;
    items: string[];
    onSelectedItem: (item: string) => void;
}

export default function ListGroup({heading, items, onSelectedItem}: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length > 0 &&
          items.map((item, index) => (
            <li
              key={index}
              className={
                selectedItem === index
                  ? 'list-group-item active'
                  : 'list-group-item'
              }
              onClick={() => {
                setSelectedItem(index);
                onSelectedItem(item);
              }}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
}
