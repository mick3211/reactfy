import React, { HTMLInputTypeAttribute, useId } from 'react';
import { IconLabel, InputStyled } from './TextInput.styled';

interface TextInputInterface
    extends React.InputHTMLAttributes<HTMLInputElement> {
    iconLeft?: React.ReactElement;
}

export const TextInput: React.FC<TextInputInterface> = ({
    iconLeft,
    ...props
}) => {
    const id = useId();

    return (
        <span style={{ position: 'relative' }}>
            {iconLeft && <IconLabel htmlFor={id}>{iconLeft}</IconLabel>}
            <InputStyled {...props} css={{ pl: iconLeft ? 4 : 3 }} id={id} />
        </span>
    );
};
