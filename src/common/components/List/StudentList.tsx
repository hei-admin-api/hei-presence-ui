import * as React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";

import {staticData} from "../student";





const columns  = [
    {
        name: "id",
        selector: "id",
        sortable: true
    },
    {
        name: "Firstname",
        selector: "dob",
        sortable: true
    },
    {
        name: "lastName",
        selector: "lastName",
        sortable: true
    },
    {
        name: "group",
        selector: "group",
        sortable: true
    },

    {
        name: "status",
        selector: "status",
        sortable: true
    }
];


export const  StudentList = ()=> {

    return (
        <ChakraProvider>
            <div className="App">
                <Card>
                    <DataTable
                        title="Liste des étudiants"
                        columns={columns}
                        data={staticData}
                        sortIcon={<SortIcon />}
                        pagination
                        selectableRows
                    />
                </Card>
            </div>
        </ChakraProvider>
    );
}