"use client";

import React from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    fontSize?: string;
    dark?: boolean;
    outline?: string;
    boxShadow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick = () => { }, fontSize = '24px', dark = false, outline = "null", boxShadow = true }) => {
    return (
        <button type='submit' className="button" onClick={onClick} style={
            Object.assign(
                dark ? { background: "#0a0a0a" } : {},
                !boxShadow ? { boxShadow: "none" } : {},
                outline != "null" ? { borderWidth: "1px", borderColor: outline } : {}
            )
        }>
            <div
                style={{
                    color: '#ededed',
                    fontSize: fontSize
                }}
            >
                {text}
            </div>
        </button>
    );
};

export default Button;
