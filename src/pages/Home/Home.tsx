import React from 'react';
import { Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../common/components';

// a boilerplate -uh
export const Home = () => (
  <Box bg={useColorModeValue('gray.100', 'blackAlpha.100')} px={4}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Box>Taas template</Box>

      <Flex alignItems={'center'}>
        <Stack direction={'row'} spacing={7}>
          <ColorModeSwitcher />

          <Menu onOpen={() => alert('not implemented !')}>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar
                size={'sm'}
                src={'https://avatars.dicebear.com/api/male/username.svg'}
              />
            </MenuButton>
          </Menu>
        </Stack>
      </Flex>
    </Flex>
  </Box>
)
