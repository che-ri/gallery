import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Input = ({ type, text, to, width }) => {
    const styles = { width };
    if (type === "Link")
        return (
            <ElLink to={to} {...styles}>
                {text}
            </ElLink>
        );
    if (type === "textarea") return <Textarea {...styles} />;
    return <ElInput {...styles} />;
};

Input.defaultProps = {
    text: null,
    to: false,
    type: "text",
    width: "50px",
};

const ElInput = styled.input`
    width: ${props => props.width};
`;

const ElLink = styled(Link)``;

const Textarea = styled.textarea``;

export default Input;
