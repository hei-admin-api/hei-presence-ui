import {
    Button,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useDisclosure,
    Modal,
    ButtonGroup,
    useToast, Box, Icon, IconButton
} from "@chakra-ui/react";
import React, {useState} from "react";
import {ModalBody, ModalFooter, ModalHeader} from "react-bootstrap";
import {AddIcon, SmallAddIcon} from "@chakra-ui/icons";
import {EventForm} from "./EventForm";
import {useNavigate} from "react-router-dom";
import {useSafeTimeout} from "@primer/react";
import "../../components/assets/card.css";

export const Addevent=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
    const toast = useToast();
    const {safeSetTimeout} = useSafeTimeout();
    let timeoutId = null
   const  [date,setDate] = useState("");
    const handleOnClick = () => {
        timeoutId = safeSetTimeout(() => navigate("/takephoto"), 1000)
    }

    return (
        <>
            <ButtonGroup size='sm' isAttached variant='outline' colorScheme='red'>
                <Button  onClick={onOpen}>
                    <AddIcon px={"-72"}/>
                    Faire l'appel
                </Button>
            </ButtonGroup>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay  bg='blackAlpha.300'
                               backdropFilter='blur(10px) ' />
                <ModalContent>
                    <ModalHeader>
                        <p className={"title__modal"}>
                            Lancez un événement
                        </p>

                    </ModalHeader>
                    <ModalCloseButton onClick={onClose}/>
                    <ModalBody>
                        <div className={"content__modal"}>
                            <EventForm label={"Type de l'evenement"}/>
                            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
                                <EventForm label={"Lieu"}/>
                            </Box>
                            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
                               <EventForm type={"date"} label={"Date d'appel"} />
                            </Box>

                            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
                                <EventForm label={"Cours"} />
                                <IconButton aria-label={"Ajouter une nouvelle groupe"} icon={<SmallAddIcon/>} ml={"5"}/>
                            </Box>
                            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
                                <EventForm label={"Groupe"}/>
                                <IconButton aria-label={"Ajouter une nouvelle groupe"} icon={<SmallAddIcon/>} ml={"5"}/>
                            </Box>
                        </div>

                    </ModalBody>
                    <ModalFooter >
                        <Button colorScheme='blue' m={"3"} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' m={"3"} onClick={()=> {
                           handleOnClick();
                            toast({
                                title: 'formulaire validée',
                                description: "Lancez votre  présence",
                                status: 'success',
                                position:'top',
                                duration: 2000,
                                isClosable: true,
                            })
                        }}>Procéder à la présence faciale</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}