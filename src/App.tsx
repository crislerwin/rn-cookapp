import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import { Button } from './components/Button';
import  {Home}  from './screens/Home';

import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
       <Home />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
