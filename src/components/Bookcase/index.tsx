import React, { useState, useContext } from 'react';

import { Bookcase, Shelf } from '../../styles/bookcase';
import BookComponent from '../Book';

import { ShelfContext } from '../../context/shelf';
import BookcaseContext from '../../context/bookcase';

const BookcaseComponent: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  //   const [shelfs, setShelfs] = useState(data);
  const { shelfs, setShelfs } = useContext(ShelfContext);

  const move = (
    fromList: number,
    toList: number,
    from: number,
    to: number,
  ): void => {
    const newShelfs = [...shelfs];
    const neutralObj = newShelfs[toList].places.filter(
      (i) => i.book == undefined,
    )[0];

    const dragged = newShelfs[fromList].places[from];
    const target = newShelfs[toList].places[to];

    //remove o item da lista e adiciona um obj neutro no lugar
    newShelfs[fromList].places.splice(from, 1, neutralObj);

    if (target && target.book) {
      //remove um undefined da lista
      const firstNeutral = newShelfs[toList].places.indexOf(neutralObj);
      newShelfs[toList].places.splice(firstNeutral, 1);

      //insere na posicao desejada
      newShelfs[toList].places.splice(to, 0, dragged);
    } else newShelfs[toList].places.splice(to, 1, dragged);

    setShelfs(newShelfs);
  };

  return (
    <BookcaseContext.Provider value={{ move, setIsDragging }}>
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
