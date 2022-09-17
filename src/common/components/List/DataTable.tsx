import React, { useEffect } from 'react';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {ShowTablePropTypes} from "../../../types/proptypes/table/ShowTable";
import {useData} from "../../../utils/hooks/use-data";


export function ShowTable(props: ShowTablePropTypes) {
    const { columns, dataGridPropTypes, ressource } = props;
    const { getList } = useData();
    const [pageSize, setPageSize] = React.useState(5);
    const [rows, setRows] = React.useState<Array<any>>([]);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const { data } = await getList("");
    //             setRows(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     })();
    // }, []);


    return (
        <div className="home__content">
            <DataGrid
                sx={{
                    height: '90vh'
                }}
                components={{Toolbar: GridToolbar}}
                componentsProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: {debounceMs: 500},
                    }
                }}
                rows={rows}
                columns={columns}
                checkboxSelection
                pageSize={pageSize}
                onPageSizeChange={(newPage) => setPageSize(newPage)}
                disableDensitySelector
                disableColumnSelector
                disableColumnFilter
                rowsPerPageOptions={[5, 10, 25, 50]}
                {...dataGridPropTypes}
            />
        </div>
    );
}