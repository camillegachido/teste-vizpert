import styled, { createGlobalStyle } from 'styled-components';
import wall from './assets/bg_stripes.svg';
import floor from './assets/ground.svg';
import lady from './assets/lady.svg';
import clock from './assets/clock_base.svg';
import logo from './assets/logo.svg';

export const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .container{
     width: 1150px;
     margin: auto;
     position: absolute;
     height: 100vh;
     z-index: 1;
     top: 0px;
     left: calc(50% - 600px);
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
`;

export const Lady = styled.div`
  position: absolute;
  background-image: url(${lady});
  bottom: 0;
  left: 0;
  height: 320px;
  width: 271px;
  z-index: 4;
`;

export const Clock = styled.div`
  position: absolute;
  background-image: url(${clock});
  width: 168px;
  height: 179px;
  left: 120px;
  top: 70px;
`;

export const Logo = styled.div`
  position: absolute;
  background-image: url(${logo});
  width: 220px;
  height: 220px;
  right: 0px;
  top: 40px;
`;
