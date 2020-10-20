import React, { useReducer, useEffect } from 'react';
import {
    FormInput,
    FormCard,
    FormTextarea,
    FormInputFile,
    FormButton
} from '../../components'
import cls from './CompanyDetails.module.scss';


function validateByField(field, fieldState) {
   
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

function validateSubmition(state) {
    console.log('validate')
    for (const prop in state) {
        console.log(`${prop}: ${state[prop].value}`)
    }

    return true
    // console.log(state)
}


const CompanyDetailsForm = () => {

    const initialState = {
        companyName: {
            value: '',
            // error: false,
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

    const reducer = (state, action) => {
        switch (action.type) {
            case 'input':
                console.log(action)
                // if (action.key == 'numberOfPeople') {
                //     if (action.value > 100 || action.value < 1) {
                //         return { ... state, [action.key]: {value: action.value, error: true} }
                //     }
                // }
                
                return {...state, [action.key]: {value: action.value, error: false}}
            
            case 'fousOut':
                console.log(action)
                if (!validateByField(action.key, state[action.key])) {
                    return {...state, [action.key]: {value: action.value || '', error: true} }
                } else {
                    return {...state, [action.key]: {...state[action.key], error: false}}
                }
            
            case 'submit':
                console.log('submit')
                if (validateSubmition(state)) {
                    return state
                }
            default:
                throw new Error('Unexpected action');
        }
    }

    useEffect(() => console.log('render'))

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
                                onChange={e => dispatch({type: 'input', key: e.target.name, value: e.target.value})}
                                // error={state.companyName.error}
                                // onBlur={(e) => dispatch({type: 'fousOut', key: e.target.name})}
                            />
                            <FormInput
                                required
                                width="35%"
                                label="Number of people"
                                type="number"
                                inputName='numberOfPeople'
                                placeholder="1-99"
                                errorMessage="This field in required"
                                onChange={e => dispatch({type: 'input', key: e.target.name, value: e.target.value})}
                                error={state.numberOfPeople.error}
                                onBlur={(e) => dispatch({type: 'fousOut', key: e.target.name})}
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
                                onChange={e => dispatch({type: 'input', key: e.target.name, value: e.target.value})}
                                error={state.businessArea.error}
                                onBlur={(e) => dispatch({type: 'fousOut', key: e.target.name})}
                            />
                        </div>

                        <div className={cls.companyRow}>
                            <FormTextarea
                                required
                                inputName='businessDescription'
                                placeholder="Type text"
                                label="Description"
                                errorMessage="This field in required"
                                onChange={e => dispatch({type: 'input', key: e.target.name, value: e.target.value})}
                                error={state.businessDescription.error}
                                onBlur={(e) => dispatch({type: 'fousOut', key: e.target.name})}
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
                                onChange={e => dispatch({type: 'input', key: e.target.name, value: e.target.files})}
                                // error={state.businessArea.error}
                                filesCount={state.files.value}

                                // onBlur={(e) => dispatch({type: 'fousOut', key: e.target.name})}
                            />
                        </div>

                        <div className={cls.companyRow}>
                            <FormButton
                                text="Submit"
                                color="#DA3F5B"
                                onClick={() => {dispatch({type: 'submit'})}}
                            />
                        </div>
                        

                    </>
                </FormCard>
            </div>
        </div>
    )
}

export { CompanyDetailsForm }