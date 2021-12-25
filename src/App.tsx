import React from 'react';

import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

import Board from './components/Board';
import Bookcase from './components/Bookcase';
import { ShelfProvider } from './context/shelf';

import { Wall, Floor, Lady, GlobalStyle, Clock, Logo } from './styles/styled';

const App: React.FC = () => {
  return (
    <ShelfProvider>
      <DndProvider options={HTML5toTouch}>
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
