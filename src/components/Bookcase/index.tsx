import React, { useState, useContext } from 'react';

import { Bookcase, Shelf } from '../../styles/bookcase';
import BookComponent from '../Book';
import CardInfo from '../CardInfo';

import { ShelfContext } from '../../context/shelf';

const BookcaseComponent: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const { shelfs } = useContext(ShelfContext);

  return (
    <>
      <Bookcase dragging={isDragging} id="bookcase">
        {shelfs.map((shelf, listInd) => (
          <Shelf
            top={shelf.top}
            smallTop={shelf.smallTop}
            key={'shelf' + shelf.id}
          >
            {shelf.places.map((place, bookInd) => (
              <BookComponent
                key={'book' + bookInd}
                listInd={listInd}
                book={place.book}
                index={bookInd}
                setIsDragging={setIsDragging}
              />
            ))}
          </Shelf>
        ))}
        <CardInfo></CardInfo>
      </Bookcase>
    </>
  );
};

export default BookcaseComponent;
