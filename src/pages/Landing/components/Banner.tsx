import React from "react";

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue, ButtonGroup, Wrap,
} from '@chakra-ui/react';
import { ItemList } from "./List/ItemList";
import {BsListCheck, MdBuild, MdCall} from "react-icons/all";
import {AddIcon} from "@chakra-ui/icons";

export const Banner = () => (
    <Wrap>
        <Stack direction='row' spacing={4} m={"2"}>

        {/*Bouton pour les actions*/}

        <ButtonGroup size='sm' isAttached variant='outline' colorScheme='red'>

            <Button>
                <AddIcon px={"-72"}/>
                Faire l'appel
            </Button>
        </ButtonGroup>
        <ButtonGroup size='sm' isAttached variant='outline' colorScheme='red'>
            <IconButton aria-label={"Verifier l'absence "} icon={<BsListCheck/>} />
            <Button>Vérifier l'appel déjà lancer</Button>
        </ButtonGroup>
    </Stack>
        <Stack>

        </Stack>
    </Wrap>
  );

