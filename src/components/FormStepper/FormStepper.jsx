import React, { useEffect } from 'react';
import cls from './FormStepper.module.scss'


const FormStepper = ({active = 1, length = 3, setActive}) => {

    return (
        <div className={cls.stepperContainer}>

            {new Array(3).fill(undefined).map((i, idx) => (
                <div onClick={() => setActive(idx)} className={`${cls.step} ${active === idx && cls.stepActive}`} key={idx}>
                <span className={cls.number}>
                    {idx+1}
                </span>
                <span className={cls.divider}/>
            </div>
            ))}
            

            {/* <div className={`${cls.step} ${active && cls.stepActive}`}>
                <span className={cls.number}>
                    2
                </span>
            </div>

            <div className={`${cls.step} ${active && cls.stepActive}`}>
                <span className={cls.number}>
                    3
                </span>
            </div> */}
        </div>
    )
}

export { FormStepper }