export const boxStyled = {
    padding: 3,
    width: "400px",
    backgroundColor: "background.default",
    border: "1px solid",
    borderColor: "primary.main",
    borderRadius: "12px",

    '@media (max-width:480px)': {
        width: "300px",
    },

    '@media (max-width:280px)': {
        width: "250px",
    },

    div: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: "0.8rem"
    },
    input: {
        height: "6px",
        marginBottom: "0",
        color: "text.secondary"
    },
    fieldset: {
        borderColor: "text.secondary"
    }
}

export const typographyStyled = {
    fontSize: "1.5rem",
    marginBottom: "16px",

    '@media (max-width:480px)': {
        fontSize: "1rem",
    },
}

export const textFieldStyled = {
    marginBottom: "16px"
}

export const resultTextFieldStyled = {
    width: "100%",
    height: "40px",
    backgroundColor: "background.default",
    marginBottom: "16px",

    fieldset: {
        border: "2px solid",
        borderColor: "primary.main"
    },

    label: {
        color: "text.primary",
        fontSize: "1rem"
    }
}