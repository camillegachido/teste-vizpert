import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Board from './components/Board';
import Bookcase from './components/Bookcase';
import { ShelfProvider } from './context/shelf';

import { Wall, Floor, Lady, GlobalStyle, Clock, Logo } from './styles/styled';

const App: React.FC = () => {
  return (
    <ShelfProvider>
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
    </ShelfProvider>
  );
};

export default App;
