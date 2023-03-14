import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { CalculatorProvider } from '../../contexts/calculator/calculatorProvider';
import { Router } from '../../router/Router';
import { Header } from '../../components/AppHeader/Header';

export const AppLayout = () => {
    return (
        <CssBaseline>
            <BrowserRouter>
                <CalculatorProvider>
                    <Header />
                    <Router />
                </CalculatorProvider>
            </BrowserRouter>
        </CssBaseline>
    )
}