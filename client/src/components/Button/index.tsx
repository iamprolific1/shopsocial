
import React from 'react';
import styles from './index.module.css'

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    type?: 'primary' | 'secondary';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ( {children, className , type = 'primary', onClick}: ButtonProps ) => {
    switch (type) {
        case "primary":
            return (
                <button className={`${styles.btn} ${styles.primary} ${className}`} onClick={() => onClick}>
                    {children}
                </button>
            )
        case "secondary":
            return (
                <button className={`${styles.btn} ${styles.secondary} ${className}`} onClick={() => onClick}>
                    {children}
                </button>
            )
        default:
            return (
                <button className={`${styles.btn} ${styles.primary} ${className}`} onClick={() => onClick}>
                    {children}
                </button>
            )
    }
}