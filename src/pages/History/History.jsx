import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useCalculator } from '../../contexts/calculator/useCalculator';
import Box from '@mui/material/Box';
import { columns } from './columns';
import { Button, Tooltip } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import { buttonStyle } from '../../GlobalStyles/button.styles';

export const History = () => {
    const { historyData, handlePage } = useCalculator();

    return (
        <Box sx={
            {
                height: 400,
                width: "100%",
            }
        }>
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
            <Box sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px"
            }}>
                <Tooltip title="Calculadora" arrow>
                    <Button
                        sx={
                            buttonStyle("primary.main", "primary.light")
                        } variant="contained" onClick={() => handlePage("/calculadora")}><CalculateIcon fontSize='large' /></Button>
                </Tooltip>
            </Box>
        </Box>
    );
}