import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useCalculator } from '../../contexts/calculator/useCalculator';
import Box from '@mui/material/Box';
import { columns } from './columns';

export const History = () => {
    const { historyData } = useCalculator();

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={historyData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
            />
        </Box>
    );
}