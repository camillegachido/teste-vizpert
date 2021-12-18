import React from 'react';

import Board from './components/Board';

import { Wall, Floor, Lady, GlobalStyle } from './styled';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Wall />
      <Floor>
        <Lady />
        <Board />
      </Floor>
    </div>
  );
};

export default App;
