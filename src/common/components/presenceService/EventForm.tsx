import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack, FormHelperText
} from "@chakra-ui/react";
import {ReactNode, useState} from "react";
import {EventItem} from "../../../types/proptypes/EventItem";

export const EventForm = (props:EventItem)=> {
    const [input, setInput] = useState('')

    const handleInputChange = (e: any) => setInput(e.target.value);

    const isError = input === ''

    return (
        <FormControl isInvalid={isError} m={"auto"} p={"auto"}>
            <FormLabel>{props?.label}</FormLabel>
            <Input
                type="text"
                value={input}
                onChange={handleInputChange}
            />
            {!isError ? (
                <FormHelperText>
                    Votre {props.label.toUpperCase().at(0)} est corracte
                </FormHelperText>
            ) : (
                <FormErrorMessage>{props.label} est obligatoire.</FormErrorMessage>
            )}
        </FormControl>
    )
};