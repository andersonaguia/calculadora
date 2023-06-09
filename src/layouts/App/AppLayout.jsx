import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { CalculatorProvider } from '../../contexts/calculator/calculatorProvider';
import { Router } from '../../router/Router';
import { Header } from '../../components/AppHeader/Header';
import { ThemeProvider } from '@mui/material/styles';
import { themeLight } from '../../themes/themeLight';
import { Main } from '../../components/AppMain/Main';
import { Footer } from '../../components/AppFooter/Footer';

export const AppLayout = () => {
    return (
        <ThemeProvider theme={themeLight}>
            <CssBaseline>
                <BrowserRouter>
                    <CalculatorProvider>
                        <Header />
                        <Main>
                            <Router />
                        </Main>
                        <Footer/>
                    </CalculatorProvider>
                </BrowserRouter>
            </CssBaseline>
        </ThemeProvider>
    )
}