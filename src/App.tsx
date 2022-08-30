import React from 'react';
import { Home } from './pages/Home';
import { ChakraProvider, theme } from '@chakra-ui/react';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}
