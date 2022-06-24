import React from "react";

interface ButtonProps {
    label: boolean;

}

const Button = (props: ButtonProps) => {
    return <button>{props.label}</button>;
};

export default Button;
