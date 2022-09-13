import {
    Button,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useDisclosure,
    Modal,
    ButtonGroup
} from "@chakra-ui/react";
import React from "react";
import {ModalBody, ModalFooter, ModalHeader} from "react-bootstrap";
import {AddIcon} from "@chakra-ui/icons";
import {EventForm} from "./EventForm";
import {useNavigate} from "react-router-dom";
import {TakePhoto} from "../TakePhoto";

export const AddEvents=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
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
                    <ModalHeader>Veillez remplir les informations suivantes pour lancez l'appel</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                     <EventForm label={"lieu"} />
                     <EventForm label={"Nom de Professeur"}/>
                     <EventForm label={"Groupe"}/>
                     <EventForm label={"Description"}/>
                    </ModalBody>
                    <ModalFooter >
                        <Button colorScheme='blue' m={"3"} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' m={"3"} onClick={()=>navigate("/takephoto")}>Procéder à la présence faciale</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}