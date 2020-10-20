import React from 'react';
import cls from './FormButton.module.scss'


const FormButton = ({
    text,
    color = 'grey',
    onClick
}) => (
    <button
        style={{backgroundColor: color}}
        className={cls.button}
        type='submit'
        onClick={onClick}
    >
        {text}
    </button>
)

export { FormButton }