import { MainStyled } from "./main.styles";
import PropTypes from 'prop-types';

export const Main = ({ children }) => {
    return (
        <MainStyled>
            {children}
        </MainStyled>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired
}