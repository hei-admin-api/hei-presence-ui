import React from "react";
import {Flash, StyledOcticon} from "@primer/react";
import {CheckIcon, InfoIcon} from "@chakra-ui/icons";

export const Info= ()=>{
    return(
        <>
            <Flash >
                <StyledOcticon icon={InfoIcon} />
                Le saviez-vous,vous pouviez modifiez les absences jusqu'à une semaine après la date d'appel
            </Flash>
        </>
    )
}