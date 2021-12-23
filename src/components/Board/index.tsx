import React, { useCallback, useContext, useState } from 'react';

import alphabetic from '../../assets/filter_alphabetic.svg';
import colors from '../../assets/filter_colors.svg';
import sizes from '../../assets/filter_sizes.svg';

import {
  Board,
  ButtonOrganize,
  ContainerButtons,
  FiltersButton,
  Button,
} from '../../styles/board';

import { ShelfContext } from '../../context/shelf';
import { ShelfPlaces } from '../../interfaces';

enum EBook {
  Alpha = 'name',
  Size = 'size',
  Color = 'color',
}

const BoardComponent: React.FC = () => {
  const { onOrganize } = useContext(ShelfContext);
  const [active, setActive] = useState<EBook>(EBook.Alpha);
  const [oldActive, setOldActive] = useState<EBook>();

  const sort = useCallback(
    (a: ShelfPlaces, b: ShelfPlaces): number => {
      return !a.book
        ? 1
        : !b.book
        ? 1
        : a.book[active] < b.book[active]
        ? -1
        : a.book[active] > b.book[active]
        ? 1
        : 0;
    },
    [active],
  );

  const btnOrganizeClick = useCallback((): void => {
    if (oldActive == active) {
      onOrganize(false);
      setOldActive(undefined);
    } else {
      onOrganize(sort);
      setOldActive(active);
    }
  }, [active, oldActive, sort]);

  return (
    <Board>
      <ContainerButtons>
        <h1>SORT BY</h1>
        <FiltersButton>
          <Button
            isActive={active == EBook.Alpha}
            onClick={() => setActive(EBook.Alpha)}
          >
            <img src={alphabetic} />
          </Button>
          <Button
            isActive={active == EBook.Color}
            onClick={() => setActive(EBook.Color)}
          >
            <img src={colors} />
          </Button>
          <Button
            isActive={active == EBook.Size}
            onClick={() => setActive(EBook.Size)}
          >
            <img src={sizes} />
          </Button>
        </FiltersButton>
        <hr />
        <ButtonOrganize
          onClick={() => {
            btnOrganizeClick();
          }}
        />
      </ContainerButtons>
    </Board>
  );
};

export default BoardComponent;
