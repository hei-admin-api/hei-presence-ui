import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from "../../../common/components";
import { Auth } from './Auth';


export const Navbar = () => (
  <Box bg={useColorModeValue('gray.100', 'blackAlpha.100')} px={4}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Box>E-Kaly</Box>
      <Flex alignItems={'center'}>
        <Stack direction={'row'} spacing={7}>
          <ColorModeSwitcher />
          <Auth />
        </Stack>
      </Flex>
    </Flex>
  </Box>
);
