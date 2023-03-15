import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { UlStyled } from './header.styles';

export const Header = () => {
    const navigate = useNavigate();
    const handlePage = (path) => {
        navigate(path)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="primary" position="static">
                <Toolbar >
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        CalcBras
                    </Typography>
                    <UlStyled>
                        <li>
                            <Button fullWidth color="secondary" variant="contained" onClick={() => handlePage("/calculadora")}>Calculadora</Button>
                        </li>
                        <li>
                            <Button fullWidth color="secondary" variant="contained" onClick={() => handlePage("/historico")}>Histórico</Button>
                        </li>
                    </UlStyled>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
