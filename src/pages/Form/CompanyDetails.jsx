import React, { useReducer, useState } from 'react';
import {
    FormInput,
    FormCard,
    FormTextarea,
    FormInputFile,
    FormButton,
    FormStepper
} from '../../components'
import cls from './CompanyDetails.module.scss';


const validateByField = (field, fieldState) => {

    if (field === 'numberOfPeople' )  {
        if ( +fieldState.value > 99 || +fieldState.value < 1) return false
    }

    if (field === 'businessArea') {
        if ( !fieldState.value.trim().length) return false
    } 
    
    if (field === 'businessDescription' ) {
        if ( !fieldState.value.trim().length) return false
    }
    
    return true
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'input':           
            return {...state, [action.key]: {value: action.value, error: false}}
        case 'focusOut':
            return { ...state, [action.key]: {...state[action.key], error: action.error}}
        case 'submit':
            return state
        case 'setError':
            return { ...state, [action.key]: {...state[action.key], error: true}  }
        default:
            throw new Error('Unexpected action');
    }
}

const CompanyDetailsForm = () => {

    const initialState = {
        companyName: {
            value: '',
            error: false,
        },
        numberOfPeople: {
            value: '',
            error: false,
        },
        businessArea: {
            value: '',
            error: false
        },
        businessDescription: {
            value: '',
            error: false
        },
        files: {
            value: '',
            error: false,
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);
    
    
    const [step, setStep] = useState(0);


    const onBlur = (e) => {
        if (!validateByField(e.target.name, state[e.target.name])) {
            dispatch({type: 'focusOut', key: e.target.name, error: true})
        } else {
            dispatch({type: 'focusOut', key: e.target.name, error: false})
        }
    }

    const onSubmit = () => {
        let error = false;
        for (const prop in state) {
            if (validateByField(prop, state[prop])) {
                // console.log(prop, 'valid')
            } else {
                error = true;
                dispatch({type: 'setError', key: prop})
            }
        }

        if (!error) {
            for (const prop in state) {
                console.log(`${prop}: ${state[prop].value}`)
            }
        }

    }

    const onInput = (e) => {
        dispatch({type: 'input', key: e.target.name, value: e.target.value})
    }

    const onFileInput = (e) => {
        dispatch({type: 'input', key: e.target.name, value: e.target.files})
    }


    return (
        <div className={cls.body}>
            <h1 style={{color: '#fff'}}>Your first project</h1>
            <FormStepper
                active={step}
                setActive={setStep}
                className={cls.stepperContainer}
            />
            {step === 0 && <div className={cls.card}>
                <FormCard
                    height="auto"
                >
                    <>
                        <div className={cls.companyRow}>
                            <FormInput
                                className={cls.companyInput}
                                inputName='companyName'
                                placeholder="Type text"
                                label="Your company name"
                                errorMessage="This field in required"
                                onChange={onInput}
                                value={state.companyName.value}
                            />
                            <FormInput
                                required
                                width="35%"
                                label="Number of people"
                                type="number"
                                className={cls.peopleInput}
                                inputName='numberOfPeople'
                                placeholder="1-99"
                                errorMessage={state.numberOfPeople.value === '' ? 'This field in required' : 'Please enter number from 1 to 99'}
                                onChange={onInput}
                                error={state.numberOfPeople.error}
                                onBlur={onBlur}
                                value={state.numberOfPeople.value}
                            />
                        </div>

                        <div className={cls.companyRow}>
                            <FormInput
                                required
                                className={cls.businessInput}
                                inputName='businessArea'
                                placeholder="Design, Marketing, Development, etc."
                                label="Business area"
                                errorMessage="This field in required"
                                onChange={onInput}
                                error={state.businessArea.error}
                                onBlur={onBlur}
                                value={state.businessArea.value}
                            />
                        </div>

                        <div className={cls.companyRow}>
                            <FormTextarea
                                required
                                inputName='businessDescription'
                                className={cls.textAreaInput}
                                placeholder="Type text"
                                label="Description"
                                errorMessage="This field in required"
                                onChange={onInput}
                                error={state.businessDescription.error}
                                onBlur={onBlur}
                                value={state.businessDescription.value}
                            />
                        </div>

                        <div className={cls.companyRow}>
                            <FormInputFile
                                multiple
                                inputName='files'
                                label="Add file as attachment"
                                errorMessage="This field in required"
                                onChange={onFileInput}
                                filesCount={state.files.value}
                            />
                        </div>

                        <div className={cls.companyRow}>
                            <FormButton
                                text="Submit"
                                onClick={onSubmit}
                                className={cls.submitButton}
                            />
                        </div>
                        

                    </>
                </FormCard>
            </div>
}
            {step === 1 && <FormCard>2</FormCard>}

            {step === 2 && <FormCard>3</FormCard>}
        </div>
    )
}

export { CompanyDetailsForm }