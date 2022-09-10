import React from 'react';
import { ButtonStyled } from './Button.styled';

interface ButtonInterfaces
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    leftIcon?: React.ReactElement;
    children?: React.ReactElement | string;
    shape?: 'circular';
    color?: 'main' | 'dark';
}

export const Button: React.FC<ButtonInterfaces> = ({
    children,
    leftIcon,
    ...props
}) => {
    return (
        <ButtonStyled {...props} css={leftIcon && { pl: 1 }}>
            <>{leftIcon}</>
            {children}
        </ButtonStyled>
    );
};
