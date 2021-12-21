import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Board from './components/Board';
import Bookcase from './components/Bookcase';

import { Wall, Floor, Lady, GlobalStyle, Clock, Logo } from './styles/styled';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  );
};

export default App;
