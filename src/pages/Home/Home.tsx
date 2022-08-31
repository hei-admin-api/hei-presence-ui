import { Divider, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Navigation } from '../../common/components';
import '../assets/css/home.css';

// a boilerplate -uh
export const Home = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  return (
    <Navigation>
      <Stack direction='row' h='100px' p={4} alignItems="center" >
        <Divider orientation='vertical' bg={useColorModeValue("black", "blackAlpha")} />
        <Heading as="h2" size="md">{id ? `Modifier ${pathname.split('/')[1]} ${id}` : `Liste des ${pathname.split('/')[0]}`}</Heading>
      </Stack>
      <Outlet />
    </Navigation>
  );
}
