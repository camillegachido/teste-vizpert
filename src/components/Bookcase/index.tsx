import React from 'react';
import { loadShelfs } from '../../services/api';

import { Bookcase, Book, Shelf, Empty } from './styled';

const shelfs = loadShelfs();

const BookcaseComponent: React.FC = () => {
  return (
    <Bookcase dragging={false}>
      {shelfs.map((shelf) => (
        <Shelf top={shelf.top} left={37} key={shelf.id}>
          {shelf.places.map(({ book }) =>
            book ? <Book key={book.name} img={book.img} /> : <Empty />,
          )}
        </Shelf>
      ))}
    </Bookcase>
  );
};

export default BookcaseComponent;
