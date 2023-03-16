export const buttonStyle = (color, hoverColor, width) => {
    const style = {
        width,
        backgroundColor: color,
        cursor: "pointer",
        color: "text.default",
        marginBottom: "16px",
        ":hover": {
            backgroundColor: hoverColor
        }
    };
    
    return style;
}