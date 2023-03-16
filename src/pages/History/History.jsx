import { DataGrid } from '@mui/x-data-grid';
import { useCalculator } from '../../contexts/calculator/useCalculator';
import Box from '@mui/material/Box';
import { columns } from './columns';
import { Button, Typography } from '@mui/material';
import { buttonStyle } from '../../GlobalStyles/button.styles';
import { boxButtonStyled, boxStyled, dataGridStyled, typographyStyled } from './history.styles';

export const History = () => {
    const { historyData, handlePage } = useCalculator();
    const initialState = {
        pagination: {
            paginationModel: {
                pageSize: 5,
            },
        }
    };
    return (
        <Box sx={boxStyled} >
            <Typography sx={typographyStyled} variant="h2" component="h2">
                Histórico
            </Typography>;
            < DataGrid
                sx={dataGridStyled}
                rows={historyData}
                columns={columns}
                initialState
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
            />
            <Box sx={boxButtonStyled}>
                <Button
                    sx={buttonStyle("primary.main", "primary.light", "200px")} variant="contained" onClick={() => handlePage("/calculadora")}>
                    Voltar
                </Button>
            </Box>
        </Box >
    );
}