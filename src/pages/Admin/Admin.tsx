import React from 'react';
import { Divider, Stack, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../../common/components';

export const Admin = () => (
  <Navigation>
    <Stack direction='row' h='100px' p={4} alignItems="center" >
      <Divider orientation='vertical' bg={useColorModeValue("black", "blackAlpha")} />
    </Stack>
    <Outlet />
  </Navigation>
);
