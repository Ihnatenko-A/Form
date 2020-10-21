import React from 'react';
import cls from './FormCard.module.scss';


const FormCard = ({children, className = ''}) => (
    <div className={`${cls.card} ${className}`}>
        {children}
    </div>
)


export { FormCard }