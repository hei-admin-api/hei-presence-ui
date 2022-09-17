import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { HackWebProviders } from './providers/HackWebProviders';
import { Landing } from './pages/Landing';
import {TakePhoto} from "./common/components/TakePhoto";
import {Authentication} from "./pages/Landing/components";

export const App = () => {
  return (
    <Router>
      <HackWebProviders>
        <ChakraProvider theme={theme}>
          <Routes>
            <Route index element={<Navigate to="/login" />} />
            <Route path="/login" element={<Authentication />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/takephoto" element={<TakePhoto />} />
          </Routes>
        </ChakraProvider>
      </HackWebProviders>
    </Router>
  );
}
