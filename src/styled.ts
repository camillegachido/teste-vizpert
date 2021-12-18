import styled, { createGlobalStyle } from 'styled-components';
import wall from './assets/bg_stripes.svg';
import floor from './assets/ground.svg';
import lady from './assets/lady.svg';

export const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Wall = styled.div`
  background-image: url(${wall});
  background-repeat: repeat;
  width: 100%;
  height: 50vh;
`;

export const Floor = styled.div`
  background-image: url(${floor});
  background-repeat: repeat;
  width: 100%;
  height: 50vh;
  position: relative;
`;

export const Lady = styled.div`
  position: absolute;
  background-image: url(${lady});
  bottom: 0;
  left: 10vw;
  height: 320px;
  width: 271px;
  z-index: 4;
`;
