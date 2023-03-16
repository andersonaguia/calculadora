import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const handlePage = (path) => {
        navigate(path)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{
                backgroundColor: 'primary.main',
                color: "text.primary"
            }} position="static">
                <Toolbar >
                    <Typography sx={
                        {
                            fontSize: "2.5rem",
                            color: "text.default"
                        }
                    }
                        variant="h1" component="div">
                        CalcBras
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
