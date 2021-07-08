import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Input = ({
    type,
    text,
    placeholder,
    to,
    _onChange,
    _onClick,
    width,
    border,
    padding,
}) => {
    const styles = { width, border, padding };
    if (type === "Link")
        return (
            <ElLink to={to} onClick={_onClick} {...styles}>
                {text}
            </ElLink>
        );
    if (type === "textarea")
        return (
            <Textarea
                placeholder={placeholder}
                onChange={_onChange}
                {...styles}
            />
        );
    return (
        <ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            {...styles}
        />
    );
};

Input.defaultProps = {
    text: null,
    placeholder: null,
    to: false,
    type: "text",
    width: "300px",
    border: "1px solid #121212",
    padding: "10px",
    _onChange: () => {},
    _onClick: () => {},
};

const ElInput = styled.input`
    width: ${props => props.width};
    border: ${props => props.border};
    padding: ${props => props.padding};
`;

const ElLink = styled(Link)`
    width: ${props => props.width};
    border: ${props => props.border};
    padding: ${props => props.padding};
    text-align: center;
`;

const Textarea = styled.textarea`
    width: ${props => props.width};
    border: ${props => props.border};
    padding: ${props => props.padding};
`;

export default Input;
