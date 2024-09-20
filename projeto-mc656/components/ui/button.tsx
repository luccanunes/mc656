import React from 'react';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <div className="button">
            {text}
        </div>
    );
};

export default Button;
