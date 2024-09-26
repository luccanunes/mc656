"use client";

import React from 'react';

interface ButtonProps {
    text: string;
    onClick?: (event: React.FormEvent) => Promise<void>;
}

const Button: React.FC<ButtonProps> = ({ text, onClick=()=>{} }) => {
    return (
        <button type='submit' className="button" onClick={onClick}>
            <div
                style={{
                color: '#ededed',
                fontSize: '24px'
                }}
            >
                {text}
            </div>
        </button>
    );
};


export default Button;
