import React from "react";
import {Flash, StyledOcticon} from "@primer/react";
import {CheckIcon, InfoIcon} from "@chakra-ui/icons";
import {DataTable} from "../../../common/components/List/DataTable";
import {StudentList} from "../../../common/components/List/StudentList";
import {Box} from "@chakra-ui/react";

export const Info= ()=>{
    return(
        <>
            <Box display={"flex"} flexDirection={"column"} m={"5"}>
                <Flash >
                    <StyledOcticon icon={InfoIcon} />
                    Le saviez-vous,vous pouviez modifier les absences jusqu'à une semaine après la date d'appel
                </Flash>
                <StudentTable/>
            </Box>

        </>
    )
}