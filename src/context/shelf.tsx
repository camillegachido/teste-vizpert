import React, { createContext, useCallback, useState } from 'react';

import { Book, EColors, Shelf, ShelfPlaces } from '../interfaces';
import { loadShelfs } from '../services/api';
import a from '../assets/book_a.svg';

interface ContextProps {
  shelfs: Shelf[];
  setShelfs: React.Dispatch<React.SetStateAction<Shelf[]>>;
  onOrganize: (
    condition: ((a: ShelfPlaces, b: ShelfPlaces) => number) | false,
  ) => void;
  move: (fromList: number, toList: number, from: number, to: number) => void;
  book: Book;
  setBook: React.Dispatch<React.SetStateAction<Book>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  editBook: (newName: string) => void;
  deleteBook: () => void;
  addBook: () => void;
}

export const ShelfContext = createContext({} as ContextProps);

interface ProviderProps {
  children: JSX.Element;
}

export function ShelfProvider({ children }: ProviderProps): JSX.Element {
  const [shelfs, setShelfs] = useState<Shelf[]>(loadShelfs());
  const [book, setBook] = useState<Book>({} as Book);
  const [show, setShow] = useState(false);

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

  const editBook = useCallback(
    (newName: string) => {
      const newShelfs = [...shelfs];

      for (let index = 0; index < newShelfs.length; index++) {
        const newShelfPlaces = newShelfs[index].places;

        const indId = newShelfPlaces.findIndex((i) => i.book?.id === book.id);

        if (indId > -1) {
          const newBook = newShelfPlaces[indId].book;
          if (newBook)
            newShelfPlaces[indId].book = {
              ...newBook,
              name: newName,
            };

          newShelfs[index].places = newShelfPlaces;
          index = newShelfs.length;
          alert('Livro editado com sucesso!');
        }
      }

      setShelfs(newShelfs);
    },
    [book, shelfs],
  );

  const deleteBook = useCallback(() => {
    const newShelfs = [...shelfs];
    for (let index = 0; index < newShelfs.length; index++) {
      const newShelfPlaces = newShelfs[index].places;

      const indId = newShelfPlaces.findIndex((i) => i.book?.id === book.id);

      if (indId > -1) {
        newShelfs[index].places[indId] = { book: undefined };
        index = newShelfs.length;
        alert('Livro deletado com sucesso!');
      }
    }

    setShelfs(newShelfs);
  }, [book]);

  const addBook = useCallback(() => {
    const newShelfs = [...shelfs];
    for (let index = 0; index < newShelfs.length; index++) {
      const newShelfPlaces = newShelfs[index].places;

      const indId = newShelfPlaces.findIndex((i) => i.book === undefined);

      if (indId > -1) {
        newShelfs[index].places[indId] = {
          book: {
            id: 'book' + new Date().getTime(),
            name: 'Novo livro',
            size: 6,
            img: a,
            color: EColors.Amarelo,
          },
        };
        index = newShelfs.length;
        alert('Novo livro foi adicionado');
      } else {
        if (index == newShelfs.length - 1)
          alert('Não é possível adicionar mais livros');
      }
    }

    setShelfs(newShelfs);
  }, []);

  return (
    <ShelfContext.Provider
      value={{
        shelfs,
        setShelfs,
        onOrganize,
        move,
        book,
        setBook,
        editBook,
        deleteBook,
        show,
        setShow,
        addBook,
      }}
    >
      {children}
    </ShelfContext.Provider>
  );
}
