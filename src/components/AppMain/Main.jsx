import { mainStyled } from "./main.styles";
import PropTypes from 'prop-types';

export const Main = ({ children }) => {
    return (
        <main style={mainStyled}>
            {children}
        </main>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired
}