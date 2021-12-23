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

  const sort = (sort: EBook) => (a: ShelfPlaces, b: ShelfPlaces) => {
    return !a.book
      ? 1
      : !b.book
      ? 1
      : a.book[sort] < b.book[sort]
      ? -1
      : a.book[sort] > b.book[sort]
      ? 1
      : 0;
  };

  const btnClick = useCallback(
    (val: EBook) => {
      setActive(val);
      onOrganize(sort(val));
    },
    [onOrganize],
  );

  return (
    <Board>
      <ContainerButtons>
        <h1>SORT BY</h1>
        <FiltersButton>
          <Button
            isActive={active == EBook.Alpha}
            onClick={(e) => btnClick(EBook.Alpha)}
          >
            <img src={alphabetic} />
          </Button>
          <Button
            isActive={active == EBook.Color}
            onClick={(e) => btnClick(EBook.Color)}
          >
            <img src={colors} />
          </Button>
          <Button
            isActive={active == EBook.Size}
            onClick={(e) => btnClick(EBook.Size)}
          >
            <img src={sizes} />
          </Button>
        </FiltersButton>
        <hr />
        <ButtonOrganize />
      </ContainerButtons>
    </Board>
  );
};

export default BoardComponent;
