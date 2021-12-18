import styled from 'styled-components';

import bookcase from '../../assets/bookcase.svg';

export const Bookcase = styled.div`
  position: absolute;
  left: calc(50% - 200px);
  background-image: url(${bookcase});
  width: 580px;
  height: 357px;
  z-index: 1;
  top: -229px;
`;
