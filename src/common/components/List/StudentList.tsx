import * as React from "react";
import {Box, ChakraProvider} from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import {ShowTable} from "./DataTable";
import {student} from "../../../types/models/Student";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";



const data = [
    {
        id : "STD2020",
        firstName : "rakoto",
        lastName : "rabemanajara",
        group : "G2",
        status: "EXCEPTED"
    },
    {
        id : "STD2020",
        firstName : "rakoto",
        lastName : "rabemanajara",
        group : "G2",
        status: "EXCEPTED"
    },
    {
        id : "STD2020",
        firstName : "rakoto",
        lastName : "rabemanajara",
        group : "G2",
        status: "EXCEPTED"
    }
];
const columns = [
    {
        id : "REFERENCE",
        firstName : "Firstname",
        lastName : "LastName",
        group : "Group",
        status: "STATUS"
    }
];
// const columns = useMemo<GridColDef[]>(
//     () => [
//         {
//             field: "id",
//             headerName: "id",
//             type: "string",
//             ...centerAlignColumn,
//             hide: true,
//
//         },
//         { field: "firstName", type: "string" },
//         { field: "lastName", type: "string" },
//         {  field: "Group", type : "string"},
//         {
//             field: "creation",
//             headerName: "creation date",
//             type: "date",
//             flex: 0.5,
//             ...centerAlignColumn,
//         },
//         {
//             field: "Actions",
//             align: "right",
//             headerAlign: "right",
//             renderCell: (params: GridRenderCellParams) => (
//                 <Box>
//
//                 </Box>
//             ),
//         },
//     ],
//     []
// );


const columnHelper = createColumnHelper<student>();


export const  StudentList = ()=> {
    return (
        <ChakraProvider>
            <div className="App">
                <Card>
                    <DataTable
                        title="Liste des étudiants"
                        columns={columns}
                        data={data}
                        sortIcon={<SortIcon />}
                        pagination
                        selectableRows
                    />
                </Card>
            </div>
        </ChakraProvider>
    );
}