import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { HackWebProviders } from './providers/HackWebProviders';
import { Landing } from './pages/Landing';
import { Admin } from './pages/Admin';
import { DishEdit, DishList } from './pages/Admin/components/dish';
import { OrderEdit } from './pages/Admin/components/orders/OrderEdit';
import { OrderList } from './pages/Admin/components/orders';

export const App = () => {
  return (
    <Router>
      <HackWebProviders>
        <ChakraProvider theme={theme}>
          <Routes>

            <Route index element={<Navigate to="/landing" />} />
            <Route path="/landing" element={<Landing />} />
            
            <Route path="/admin" element={<Admin />}>
              <Route index element={<Navigate to="dishes" />} />

              <Route path="dishes" element={<DishList />} />
              <Route path="dishes/:id" element={<DishEdit mode="update" label="" />} />
              <Route path="dishes/create" element={<DishEdit mode="add" label="" />} />

              <Route path="orders" element={<OrderList />} />
              <Route path="orders/:id" element={<OrderEdit mode="update" label="" />} />
              <Route path="orders/create" element={<OrderEdit mode="add" label="" />} />
            </Route>

          </Routes>
        </ChakraProvider>
      </HackWebProviders>
    </Router>
  );
}
