import React from 'react';
import { Home } from './pages/Home';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { HackWebProviders } from './providers/HackWebProviders';

export const App = () => {
  return (
    <HackWebProviders>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </HackWebProviders>
  );
}
