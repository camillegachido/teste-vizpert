import React from 'react';

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

const BoardComponent: React.FC = () => {
  return (
    <Board>
      <ContainerButtons>
        <h1>SORT BY</h1>
        <FiltersButton>
          <Button isActive={true}>
            <img src={alphabetic} />
          </Button>
          <Button isActive={false}>
            <img src={colors} />
          </Button>
          <Button isActive={false}>
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
