import React, {Component} from 'react'
import {addStoryAction} from "../action/actions";
import ShowIteration from './ShowIteration'
import {connect} from 'react-redux'
import AddIteration from "./AddIteration";

class Project extends Component {
  constructor(props) {
    super(props)
    this.handleAddIteration = this.handleAddIteration.bind(this)
  }

  handleAddIteration(values) {
    this.props.dispatch(addStoryAction(values.iterationId, values.title, values.startDate, values.expireDate))
  }

  render() {
    return (
      <div>
        <AddIteration/>
        <ShowIteration/>
      </div>
    )
  }
}

export default connect()(Project)