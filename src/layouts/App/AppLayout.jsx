import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { CalculatorProvider } from '../../contexts/calculator/calculatorProvider';
import { Router } from '../../router/Router';

export const AppLayout = () => {
    return (
        <CssBaseline>
            <BrowserRouter>
                <CalculatorProvider>
                    <Router />
                </CalculatorProvider>
            </BrowserRouter>
        </CssBaseline>
    )
}