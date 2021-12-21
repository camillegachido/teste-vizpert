import React, { useState } from 'react';
import { loadShelfs } from '../../services/api';

import { Bookcase, Shelf } from '../../styles/bookcase';
import { ShelfPlaces } from '../../interfaces';
import BookComponent from '../Book';

import BookcaseContext from './context';

const data = loadShelfs();

const BookcaseComponent: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [shelfs, setShelfs] = useState(data);

  const move = (
    fromList: number,
    toList: number,
    from: number,
    to: number,
  ): void => {
    const newShelfs = [...shelfs];
    const neutralObj = { book: undefined } as ShelfPlaces;

    const dragged = newShelfs[fromList].places[from];
    const target = newShelfs[toList].places[to];

    //remove o item da lista e adiciona um obj neutro no lugar
    newShelfs[fromList].places.splice(from, 1, neutralObj);

    if (target && target.book) {
      //remove um undefined da lista
      const firstNeutral = newShelfs[toList].places.findIndex(
        (i) => i === neutralObj,
      );
      newShelfs[toList].places.splice(firstNeutral, 1);

      //insere na posicao desejada
      newShelfs[toList].places.splice(to, 0, dragged);
    } else newShelfs[toList].places.splice(to, 1, dragged);

    setShelfs(newShelfs);
  };

  return (
    <BookcaseContext.Provider value={{ shelfs, move, setIsDragging }}>
      <Bookcase dragging={isDragging}>
        {shelfs.map((shelf, listInd) => (
          <Shelf top={shelf.top} left={37} key={'shelf' + shelf.id}>
            {shelf.places.map((place, bookInd) => (
              <BookComponent
                key={'book' + bookInd}
                listInd={listInd}
                book={place.book}
                index={bookInd}
              />
            ))}
          </Shelf>
        ))}
      </Bookcase>
    </BookcaseContext.Provider>
  );
};

export default BookcaseComponent;
