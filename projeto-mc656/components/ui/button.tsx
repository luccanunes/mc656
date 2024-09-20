import React from 'react';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <div className="button">
            <div
                style={{
                color: '#ededed',
                fontSize: '24px'
                }}
            >
                {text}
            </div>
        </div>
    );
};

export default Button;
