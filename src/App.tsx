import React from 'react';
import { Home } from './pages/Home';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { HackWebProviders } from './providers/HackWebProviders';
import { DishEdit, DishList } from './pages/Home/components/dish';
import { OrderList } from './pages/Home/components/orders';
import { OrderEdit } from './pages/Home/components/orders/OrderEdit';

export const App = () => {
  return (
    <Router>
      <HackWebProviders>
        <ChakraProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Navigate to="dishes" />} />
              <Route path="dishes" element={<DishList />} />
              <Route path="dishes/:id" element={<DishEdit mode='update' label="Modifier le plat" />} />
              <Route path="dishes/create" element={<DishEdit mode='add' label="Modifier le plat" />} />

              <Route path="orders" element={<OrderList />} />
              <Route path="orders/:id" element={<OrderEdit mode="update" label="Modifier la command" />} />
              <Route path="orders/create" element={<OrderEdit mode="add" label="Modifier la command" />} />
            </Route>
          </Routes>
        </ChakraProvider>
      </HackWebProviders>
    </Router>
  );
}
