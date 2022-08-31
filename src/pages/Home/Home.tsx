import { Divider, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from '../../common/components';
import '../assets/css/home.css';

// a boilerplate -uh
export const Home = () => {
  const { pathname } = useLocation();

  return (
    <Navigation>
      <Stack direction='row' h='100px' p={4} alignItems="center">
        <Divider orientation='vertical' bg={useColorModeValue("black", "blackAlpha")} />
        <Heading as="h2" size="md">List of all {pathname.slice(1)}</Heading>
      </Stack>
      <Outlet />
    </Navigation>
  );
}
