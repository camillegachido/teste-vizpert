import React from 'react';

import Board from './components/Board';
import Bookcase from './components/Bookcase';

import { Wall, Floor, Lady, GlobalStyle, Clock, Logo } from './styled';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Wall />
      <Floor />
      <div className="container">
        <Clock />
        <Logo />
        <Lady />
        <Bookcase />
        <Board />
      </div>
    </div>
  );
};

export default App;
