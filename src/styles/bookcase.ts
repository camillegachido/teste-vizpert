import styled from 'styled-components';

import bookcase from '../assets/bookcase.svg';

export const Empty = styled.div`
  height: 93px;
  width: 33px;
  border-style: dashed;
  border-width: 1px;
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
`;

interface ShelfProps {
  top: number;
  left: number;
}

export const Shelf = styled.div<ShelfProps>`
  display: flex;
  position: relative;
  justify-content: space-between;
  top: ${(p) => p.top + 'px'};
  left: ${(p) => p.left + 'px'};
  width: 390px;
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
`;
