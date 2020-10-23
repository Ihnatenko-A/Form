import React from 'react';
import cls from './FormTextarea.module.scss';


const FormTextarea = ({
    inputName,
    type = 'text',
    placeholder,
    label,
    error,
    onChange,
    required,
    errorMessage,
    className = '',
    value,
    onBlur = () => {},

}) => (
        <div 
            className={`${cls.textareaWrapper} ${error && cls.error} ${className}`}
        >
            <label htmlFor={inputName}>{label}{required && <span> *</span> }</label>
            <textarea
                
                className={cls.defaultTextarea}
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
    
export { FormTextarea }