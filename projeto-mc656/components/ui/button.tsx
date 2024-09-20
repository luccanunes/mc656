import React from 'react';

interface ButtonProps {
    text: string;
}


const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        // Antes tava className="button", to só testando com esse
        <a className="loginButton">
            {text}
        </a>
    );
};


export default Button;
