import styled from 'styled-components';

import board from '../assets/board.svg';
import organize from '../assets/button.svg';
import activeButton from '../assets/filter_button_active.svg';
import desactiveButton from '../assets/filter_button.svg';

export const Board = styled.div`
  position: absolute;
  background-image: url(${board});
  bottom: 40px;
  left: 15px;
  height: 195px;
  width: 424px;
  z-index: 1;

  @media (max-width: 1150px) {
    width: 261px;
    height: 120px;
  }
`;

export const ContainerButtons = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  height: 39px;
  width: 160px;
  z-index: 5;

  h1 {
    color: #babaca;
    text-align: center;
    font-size: 1em;
  }

  hr {
    border: solid 1px #babaca;
  }

  @media (max-width: 1150px) {
    width: 110px;
    height: auto;
    right: 7px;
    top: 0px;

    h1 {
      margin-bottom: 5px;
    }
  }
`;

export const FiltersButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 1150px) {
    grid-column-gap: 5px;
  }
`;

interface ButtonProps {
  isActive: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-image: url(${(p) =>
    p.isActive ? activeButton : desactiveButton});
  background-repeat: no-repeat;

  width: 100%;
  height: 46px;
  border: none;

  &:hover {
    cursor: pointer;
  }

  img {
    height: 22px;
    margin-top: 3px;
  }

  @media (max-width: 1150px) {
    background-color: transparent;
    height: 34px;

    img {
      height: 15px;
    }
  }
`;

export const ButtonOrganize = styled.div`
  background-image: url(${organize});
  height: 39px;
  width: 160px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1150px) {
    height: 27px;
    width: 100%;
  }
`;
