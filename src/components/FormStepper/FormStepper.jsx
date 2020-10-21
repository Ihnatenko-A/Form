import React from 'react';
import cls from './FormStepper.module.scss'


const FormStepper = ({
    active = 1,
    setActive,
    className
}) => {
    return (
        <div className={`${cls.stepperContainer} ${className || ''}`}>

            {new Array(3).fill(undefined).map((i, idx) => (
                <div onClick={() => setActive(idx)} className={`${cls.step} ${active === idx && cls.stepActive}`} key={idx}>
                <span className={cls.number}>
                    {idx+1}
                </span>
                <span className={cls.divider}/>
            </div>
            ))}

        </div>
    )
}

export { FormStepper }