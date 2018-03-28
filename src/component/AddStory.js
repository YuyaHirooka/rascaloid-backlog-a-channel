import React from 'react'
import {Field, reduxForm} from 'redux-form';

const AddStory = props => {
  const {handleSubmit, pristine, reset, submitting, iterationId} = props;
  console.log(iterationId);

  return (

      <form onSubmit={handleSubmit}>
        <div>
          <label>title</label>
          <Field
              name={"title:" + iterationId}
              component="input"
              type="text"
              placeholder="Title"
          />
        </div>
        <div>
          <label>Start Date</label>
          <Field
              name={"startDate:" + iterationId}
              component="input"
              type="date"
              placeholder="Start Date"
          />
        </div>
        <div>
          <label>Expire Date</label>
          <Field
              name={"expireDate:" + iterationId}
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
};

export default reduxForm({
  form: 'newIteration',
})(AddStory)

//export default connect()(AddStory)