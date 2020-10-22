import React from 'react';
import cls from './FormButton.module.scss'


const FormButton = ({
    text,
    onClick,
    className = ''
}) => (
    <button
        className={`${cls.button} ${className}`}
        type='submit'
        onClick={onClick}
    >
        {text}
    </button>
)

export { FormButton }