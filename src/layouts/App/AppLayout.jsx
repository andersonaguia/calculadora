import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '../../router/Router';

export const AppLayout = () => {
    return (
        <CssBaseline>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </CssBaseline>
    )
}