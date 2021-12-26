import React, { createContext, useCallback, useState } from 'react';

import { Book, Shelf, ShelfPlaces } from '../interfaces';
import { loadShelfs } from '../services/api';

interface ContextProps {
  shelfs: Shelf[];
  setShelfs: React.Dispatch<React.SetStateAction<Shelf[]>>;
  onOrganize: (
    condition: ((a: ShelfPlaces, b: ShelfPlaces) => number) | false,
  ) => void;
  move: (fromList: number, toList: number, from: number, to: number) => void;
  book: Book;
  setBook: React.Dispatch<React.SetStateAction<Book>>;
}

export const ShelfContext = createContext({} as ContextProps);

interface ProviderProps {
  children: JSX.Element;
}

export function ShelfProvider({ children }: ProviderProps): JSX.Element {
  const [shelfs, setShelfs] = useState<Shelf[]>(loadShelfs());
  const [book, setBook] = useState<Book>({} as Book);

  const onOrganize = useCallback(
    (condition: ((a: ShelfPlaces, b: ShelfPlaces) => number) | false) => {
      const newShelfs = [...shelfs];

      newShelfs.forEach((shelf) => {
        const places = shelf.places.filter((pl) => pl.book);
        const sorted = !condition ? places.reverse() : places.sort(condition);

        const newPlaces = [...sorted];
        for (let index = 0; index < 10 - sorted.length; index++) {
          newPlaces.push({ book: undefined });
        }

        shelf.places = newPlaces;
      });
      setShelfs(newShelfs);
    },
    [shelfs],
  );

  const move = useCallback(
    (fromList: number, toList: number, from: number, to: number) => {
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
    },
    [shelfs],
  );

  return (
    <ShelfContext.Provider
      value={{
        shelfs,
        setShelfs,
        onOrganize,
        move,
        book,
        setBook,
      }}
    >
      {children}
    </ShelfContext.Provider>
  );
}
