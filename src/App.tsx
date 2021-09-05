import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Button} from './components/Button';

import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button></Button>
    </ThemeProvider>
  );
};

export default App;
