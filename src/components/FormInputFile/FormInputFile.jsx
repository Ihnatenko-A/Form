import React from 'react';
import cls from './FormInputFile.module.scss';

const FormInputFile = ({
    inputName,
    // type = 'text',
    // dispatch,
    placeholder,
    width = '100%',
    label,
    error,
    onChange,
    required,
    errorMessage,
    multiple,
    filesCount,
    onBlur = () => {},

}) => (
        <div 
            className={`${cls.inputFileWrapper} ${error && cls.error}`}
            style={{width: width}}
        >
            <label htmlFor={inputName}>
                <span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder-plus" className="svg-inline--fa fa-folder-plus fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464,128H272L208,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V176A48,48,0,0,0,464,128ZM359.5,296a16,16,0,0,1-16,16h-64v64a16,16,0,0,1-16,16h-16a16,16,0,0,1-16-16V312h-64a16,16,0,0,1-16-16V280a16,16,0,0,1,16-16h64V200a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16v64h64a16,16,0,0,1,16,16Z"></path></svg>
                    {label}
                </span>
                <span className={cls.count}>
                    { filesCount.length } file{ filesCount.length === 1 ? '' : 's' } attached
                </span>
            </label>
            <input
                id={inputName}
                multiple={multiple}
                className={cls.defaultInputFile}
                placeholder={placeholder}
                name={inputName}
                type='file'
                onChange={e => onChange(e)}
                onBlur={e => onBlur(e)}
            />
            <span className={cls.errorField}>{error && errorMessage}</span>
        </div>
    )
    
export { FormInputFile };