import React from 'react';

import { Wall, Floor, Lady, GlobalStyle } from './styled';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Wall />
      <Floor>
        <Lady />
      </Floor>
    </div>
  );
};

export default App;
