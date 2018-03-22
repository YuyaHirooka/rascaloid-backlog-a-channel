import React from 'react'
//import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form';
//import addIterations from "../reducer/addIterations";


const AddStory = props => {

    const {handleSubmit, pristine,reset, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>title</label>
                <Field
                    name="title"

                    component="input"
                    type="text"
                    placeholder="Title"
                />
            </div>
            <div>
                <label>title</label>
                <Field
                    name="startDate"
                    component="input"
                    type="date"
                    placeholder="Start Date"
                />
            </div>
            <div>
                <label>title</label>
                <Field
                    name="expireDate"
                    component="input"
                    type="date"
                    placeholder="Expire Date"
                />
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'newIteration',
})(AddStory)