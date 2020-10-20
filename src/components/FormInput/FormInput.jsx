import React from 'react';
import cls from './FormInput.module.scss';

const FormInput = ({
    inputName,
    type = 'text',
    // dispatch,
    placeholder,
    width = '100%',
    label,
    error,
    onChange,
    required,
    errorMessage,
    onBlur = () => {},

}) => (
        <div 
            className={`${cls.inputWrapper} ${error && cls.error}`}
            style={{width: width}}
        >
            <label htmlFor={inputName}>{label}{required && <span>*</span> }</label>
            <input
                
                className={cls.defaultInput}
                placeholder={placeholder}
                name={inputName}
                type={type}
                onChange={e => onChange(e)}
                onBlur={e => onBlur(e)}
            />
            <span className={cls.errorField}>{error && errorMessage}</span>
        </div>
    )
    
export { FormInput };