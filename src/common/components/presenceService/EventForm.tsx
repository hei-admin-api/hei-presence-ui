import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    FormHelperText
} from "@chakra-ui/react";
import React, { useState} from "react";
import {EventItem} from "../../../types/proptypes/EventItem";


export const EventForm = (props:EventItem)=> {
    const [input, setInput] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    const isError = input === '';

    return (
        <FormControl isInvalid={isError} m={"auto"} p={"auto"}>
            <FormLabel>{props?.label}</FormLabel>
            <Input
                type={props.type == null ? props.type : "text"}
                value={input}
                onChange={handleInputChange}
            />


            {!isError ? (
                <FormHelperText>
                  Correcte
                </FormHelperText>
            ) : (
                <FormErrorMessage>Le champs {props.label.toLowerCase()} est obligatoire.</FormErrorMessage>
            )}
        </FormControl>
    )
};