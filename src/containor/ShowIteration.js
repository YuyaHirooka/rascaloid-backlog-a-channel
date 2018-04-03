import {connect} from 'react-redux'
import ShowIterations from "../component/ShowIterations"
import {sortStoryAction, addStoryAction} from '../action/actions'
// todo:add taggle

const getIterations = iterations => {
  //todo: return でプロジェクトを取りに行くようにする
  return iterations
}

const mapStateIterations = state => {
  return {
    iterations: getIterations(state.iterations)
  }
}

const mapDispatchTodoProps = dispatch => {
  return {
    onHandleChange: (iterationId, sortedStory) => {
      dispatch(sortStoryAction(iterationId, sortedStory))
    },
    addStory: (values, action, form) => {
      let iterationId = form.iterationId;
      dispatch(addStoryAction(Number.parseInt(iterationId), values['title:' + iterationId], values['startDate:' + iterationId], values['expireDate:' + iterationId]))
    }
  }
}

const ShowIteration = connect(
    mapStateIterations,
    mapDispatchTodoProps,
)(ShowIterations)


export default ShowIteration