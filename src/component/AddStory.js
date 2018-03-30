import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form';

class AddStory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iterationId: props.iterationId,
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label>title</label>
            <Field
                name={"title:" + this.props.iterationId}
                component="input"
                type="text"
                placeholder="Title"
            />
          </div>
          <div>
            <label>Start Date</label>
            <Field
                name={"startDate:" + this.props.iterationId}
                component="input"
                type="date"
                placeholder="Start Date"
            />
          </div>
          <div>
            <label>Expire Date</label>
            <Field
                name={"expireDate:" + this.props.iterationId}
                component="input"
                type="date"
                placeholder="Expire Date"
            />
          </div>
          <div>
            <button type="submit" disabled={this.props.pristine || this.props.submitting}>
              Submit
            </button>
            <button type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
              Clear Values
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'newIteration',
})(AddStory)

//export default connect()(AddStory)