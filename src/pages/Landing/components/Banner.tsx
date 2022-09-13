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
import {ItemCard} from "../../../common/components/Card";
import {Datapicker} from "../../../common/components/DatePicker";
import {AddEvents} from "../../../common/components/presenceService/Addevents";

export const Banner = () => (
    <Box display={"flex"} flexDirection={"column"} m={"5"}>
        <Stack direction='row' spacing={4} m={"2"}>

        {/*Bouton pour les actions*/}

            <AddEvents/>
        <ButtonGroup size='sm' isAttached variant='outline' colorScheme='red'>
            <IconButton aria-label={"Verifier l'absence "} icon={<BsListCheck/>} />
            <Button>Vérifier l'appel déjà lancer</Button>
        </ButtonGroup>

    </Stack>
        <Stack>
            <Datapicker/>
            <ItemCard quantity={0} label={"en retard avec mot d'excuse"}/>
            <ItemCard quantity={2} label={"en retard"}/>
            <ItemCard quantity={1} label={"Absence injustifiée"}/>
            <ItemCard quantity={2} label={"Absence justifiée"}/>
            <ItemCard quantity={"juillet 2022"} label={"le moi qui compte plus d'absence"}/>
        </Stack>
    </Box>
  );

