import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading, Image,
  Input,
  Stack,
  useColorModeValue, useToast,
} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";
import {LoginBack} from "../../../conf/environment";
import {useSafeTimeout} from "@primer/react";

export const Authentication = ()=> {
  const backLogin = LoginBack;
  const navigate = useNavigate();
  const toast = useToast();
  const {safeSetTimeout, safeClearTimeout} = useSafeTimeout();
  let timeoutId = null

  const handleOnClick = () => {
    timeoutId = safeSetTimeout(() => navigate("/landing"), 3000)
  }

  return (
      <Box
          backgroundImage={backLogin}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
      >
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}

        >

          <Stack
              spacing={4}
              w={'full'}
              maxW={'md'}
              bg={useColorModeValue('white', 'gray.700')}
              rounded={'xl'}
              boxShadow={'lg'}
              p={6}
              my={12}>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
             Présence Faciale des étudiants
            </Heading>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                  placeholder="hei.teacher@example.com"
                  _placeholder={{ color: 'gray.500' }}
                  type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={()=> {
                  handleOnClick();
                toast({
                  title: 'Vous êtes connécté',
                  description: "Lancez votre  présence",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
              }}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Box>

  );
}