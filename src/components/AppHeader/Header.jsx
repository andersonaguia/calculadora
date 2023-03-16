import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { appBarStyled, typographyStyled } from './header.styles';

export const Header = () => {
    return (
        <Box>
            <AppBar sx={appBarStyled} position="static">
                <Toolbar >
                    <Typography sx={typographyStyled} variant="h1" component="div">
                        CalcBras
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
