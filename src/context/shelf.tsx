import React, { createContext, useCallback, useState } from 'react';

import { Shelf, ShelfPlaces } from '../interfaces';
import { loadShelfs } from '../services/api';

interface ContextProps {
  shelfs: Shelf[];
  setShelfs: React.Dispatch<React.SetStateAction<Shelf[]>>;
  onOrganize: (condition: (a: ShelfPlaces, b: ShelfPlaces) => number) => void;
}

export const ShelfContext = createContext({} as ContextProps);

interface ProviderProps {
  children: JSX.Element;
}

export function ShelfProvider({ children }: ProviderProps): JSX.Element {
  const [shelfs, setShelfs] = useState<Shelf[]>(loadShelfs());

  const onOrganize = useCallback(
    (condition: (a: ShelfPlaces, b: ShelfPlaces) => number) => {
      const newShelfs = [...shelfs];

      newShelfs.forEach((e) => {
        const places = e.places.filter((pl) => pl.book);
        const sorted = places.sort(condition);

        const newPlaces = [...sorted];
        for (let index = 0; index < 10 - sorted.length; index++) {
          newPlaces.push({ book: undefined });
        }

        e.places = newPlaces;
      });
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
      }}
    >
      {children}
    </ShelfContext.Provider>
  );
}
