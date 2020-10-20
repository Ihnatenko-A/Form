import React, { useReducer, useEffect } from 'react';
import {
    FormInput,
    FormCard,
    FormTextarea,
    FormInputFile,
    FormButton
} from '../../components'
import cls from './CompanyDetails.module.scss';


const validateByField = (field, fieldState) => {
   
    // if (field === 'companyName' && fieldState.value.length < 3) return false
    
    if (field === 'numberOfPeople' )  {
        if ( fieldState.value > 99 || fieldState.value < 1) return false
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
            // console.log('input')            
            return {...state, [action.key]: {value: action.value, error: false}}
        
        case 'focusOut':
            // console.log('focusOut')
            return { ...state, [action.key]: {...state[action.key], error: action.error}}

        case 'submit':
            // console.log('submit')
            // if (validateSubmition(state)) {
                return state
            // }
        case 'setError':
            // console.log(action)
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

    // useEffect(() => console.log('render'));

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

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className={cls.body}>
            <h1>Your first project</h1>
            <div><h2>stepper</h2></div>
            <div className={cls.card}>
                <FormCard
                    height="auto"
                >
                    <>
                        <div className={cls.companyRow}>
                            <FormInput
                                width="60%"
                                inputName='companyName'
                                placeholder="Type text"
                                label="Your company name"
                                errorMessage="This field in required"
                                onChange={onInput}
                                // error={state.companyName.error}
                                // onBlur={(e) => dispatch({type: 'focusOut', key: e.target.name})}
                            />
                            <FormInput
                                required
                                width="35%"
                                label="Number of people"
                                type="number"
                                inputName='numberOfPeople'
                                placeholder="1-99"
                                errorMessage="This field in required"
                                onChange={onInput}
                                error={state.numberOfPeople.error}
                                onBlur={onBlur}
                            />
                            {/* <h2>{state.companyName.value}</h2> */}
                        </div>

                        <div className={cls.companyRow}>
                            <FormInput
                                required
                                inputName='businessArea'
                                placeholder="Design, Marketing, Development, etc."
                                label="Business area"
                                errorMessage="This field in required"
                                onChange={onInput}
                                error={state.businessArea.error}
                                onBlur={onBlur}
                            />
                        </div>

                        <div className={cls.companyRow}>
                            <FormTextarea
                                required
                                inputName='businessDescription'
                                placeholder="Type text"
                                label="Description"
                                errorMessage="This field in required"
                                onChange={onInput}
                                error={state.businessDescription.error}
                                onBlur={onBlur}
                            />
                        </div>

                        <div className={cls.companyRow}>
                            <FormInputFile
                                // required
                                multiple
                                inputName='files'
                                // placeholder="Add file as attachment"
                                label="Add file as attachment"
                                errorMessage="This field in required"
                                onChange={onInput}
                                // error={state.businessArea.error}
                                filesCount={state.files.value}

                                // onBlur={(e) => dispatch({type: 'focusOut', key: e.target.name})}
                            />
                        </div>

                        <div className={cls.companyRow}>
                            <FormButton
                                text="Submit"
                                color="#DA3F5B"
                                onClick={onSubmit}
                            />
                        </div>
                        

                    </>
                </FormCard>
            </div>
        </div>
    )
}

export { CompanyDetailsForm }