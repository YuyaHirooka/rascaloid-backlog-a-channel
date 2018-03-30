import React, {Component} from 'react'
import ShowIterationsWithTree from './ShowIterationsWithTree'

class ShowIterations extends Component {
  render() {
    return (this.props.iterations.map((iteration) => (
        <ShowIterationsWithTree
            key={iteration.iterationId}
            iteration={iteration}
            onHandleChange={this.props.onHandleChange}
            addStory={this.props.addStory}
        />
    )))
  }
}

export default ShowIterations