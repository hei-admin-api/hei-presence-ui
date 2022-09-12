import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center, Icon, BreadcrumbItem, Breadcrumb, BreadcrumbLink,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import hei from "./assets/logo/HEI-logo.svg"
const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex  alignItems={'center'} justifyContent={'space-between'}>
                        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                             <img src={'https://firebasestorage.googleapis.com/v0/b/login-54234.appspot.com/o/HEI-logo-removebg-preview.png?alt=media&token=3dbb9edc-a966-44b1-b990-7e6db9e3203d'}/>

                        </Box>


                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>


                            <Menu>
                                <Breadcrumb fontWeight='medium' fontSize='sm'>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href='#'>Tableau de Bord</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem isCurrentPage>
                                        <BreadcrumbLink >Fiche de présence</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}