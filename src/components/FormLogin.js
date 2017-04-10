import React from 'react'
import {Field, reduxForm} from 'redux-form'
import BasicField from './BasicField'

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required.'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address.'
    }

    if (!values.password) {
        errors.password = 'Required.'
    }

    return errors
}

const FormLogin = (props) => {
    const {handleSubmit, invalid, pristine, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name='email' type='email' component={BasicField} label='email'/>
            <Field name='password' type='password' component={BasicField} label='password'/>
            <div className='control'>
                <button className={'button is-primary is-large' + (submitting ? ' is-loading' : '')} type='submit'
                        disabled={invalid || pristine || submitting}>login
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'FormLogin',
    validate
})(FormLogin)
