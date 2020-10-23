import React from 'react';
import cls from './FormInput.module.scss';

const FormInput = ({
    inputName,
    type = 'text',
    placeholder,
    label,
    error = '',
    onChange,
    required,
    errorMessage,
    className = '',
    value,
    onBlur = () => {},

}) => (
        <div 
            className={`${cls.inputWrapper} ${error && cls.error} ${className}`}
        >
            <label htmlFor={inputName}>{label}{required && <span> *</span> }</label>
            <input
                className={cls.defaultInput}
                placeholder={placeholder}
                name={inputName}
                type={type}
                onChange={e => onChange(e)}
                onBlur={e => onBlur(e)}
                value={value}
            />
            <span className={cls.errorField}>{error && errorMessage}</span>
        </div>
    )
    
export { FormInput };