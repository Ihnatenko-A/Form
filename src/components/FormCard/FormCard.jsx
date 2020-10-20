import React from 'react';
import cls from './FormCard.module.scss';


const FormCard = ({children, height = 800, width = 600}) => (
    <div className={cls.card} style={{height: height, width: width}}>
        {children}
    </div>
)


export { FormCard }