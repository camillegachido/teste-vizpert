import React, { useState } from 'react';
import { loadShelfs } from '../../services/api';

import { Bookcase, Shelf } from '../../styles/bookcase';
import BookComponent from '../Book';

const shelfs = loadShelfs();

const BookcaseComponent: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Bookcase dragging={isDragging}>
      {shelfs.map((shelf) => (
        <Shelf top={shelf.top} left={37} key={shelf.id}>
          {shelf.places.map(({ book }, i) => (
            <BookComponent
              key={'book' + i}
              book={book}
              setIsDragging={setIsDragging}
            />
          ))}
        </Shelf>
      ))}
    </Bookcase>
  );
};

export default BookcaseComponent;
