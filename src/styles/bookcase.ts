import styled from 'styled-components';

import bookcase from '../assets/bookcase.svg';

export const Empty = styled.div`
  height: 93px;
  width: 33px;
  border-style: dashed;
  border-width: 1px;

  @media (max-width: 1150px) {
    height: 50px;
    width: 29px;
  }
`;

interface BookProps {
  img: string;
}

export const Book = styled.div<BookProps>`
  height: 93px;
  width: 33px;
  border: dashed 1px transparent;
  background-image: url(${(book) => book.img});
  background-repeat: no-repeat;

  @media (max-width: 1150px) {
    height: 50px;
    width: 29px;
  }
`;

interface BookcaseProps {
  dragging: boolean;
}

export const Bookcase = styled.div<BookcaseProps>`
  position: absolute;
  left: calc(50% - 200px);
  background-image: url(${bookcase});
  width: 580px;
  height: 357px;
  z-index: 1;
  top: calc(50% - 229px);

  ${Empty} {
    border-color: ${(p) => (p.dragging ? '#fff' : 'transparent')};
  }

  @media (max-width: 1150px) {
    left: calc(50% - 136px);
    width: 100%;
    height: 188px;
    top: calc(50% - 117px);
  }
`;

interface ShelfProps {
  top: number;
  smallTop: number;
}

export const Shelf = styled.div<ShelfProps>`
  display: flex;
  position: relative;
  justify-content: space-between;
  top: ${(p) => p.top + 'px'};
  left: 37px;
  width: 390px;

  @media (max-width: 1150px) {
    width: 207px;
    left: 18px;
    top: ${(p) => p.smallTop + 'px'};
  }
`;

interface CardInfosProps {
  top: number;
  left: number;
  show: boolean;
}

export const CardInfos = styled.div<CardInfosProps>`
  position: absolute;
  top: ${(p) => p.top + 70 + 'px'};
  left: ${(p) => p.left + 'px'};
  display: ${(p) => (p.show ? 'block' : 'none')};
  background-color: #fff;
  padding: 0px 8px;
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
  border-radius: 5px;

  @media (max-width: 1150px) {
    top: ${(p) => p.top + 40 + 'px'};
  }

  p:first-child {
    text-align: right;
  }

  p {
    text-align: left;
    margin: 10px 5px;
  }

  p:hover {
    cursor: pointer;
  }

  h2 {
    border-bottom: 1px solid #ebebeb;
    margin: 10px 0px;
  }
`;
