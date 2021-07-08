import React from "react";
import styled from "styled-components";

const Button = ({ children, _onClick, bg, color, width, height, padding }) => {
    const styles = { bg, color, width, height, padding };
    return (
        <ElButton onClick={_onClick} {...styles}>
            {children}
        </ElButton>
    );
};

Button.defaultProps = {
    children: null,
    bg: "#fff",
    color: "#121212",
    width: "300px",
    height: "false",
    padding: "10px",
};

const ElButton = styled.button`
    background-color: ${props => props.bg};
    ${props => (props.width ? `width:${props.width};` : "")};
    ${props => (props.height ? `height: ${props.height};` : undefined)}
    ${props => (props.color ? `color:${props.color};` : "")}
    padding: ${props => props.padding};
    text-align: center;
`;

export default Button;
