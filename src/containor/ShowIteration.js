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
        onChangeHandle: sortedStory => {
            dispatch(sortStoryAction(sortedStory))
        },
        addStory:values => {
          let iterationId = Object.keys(values)[0].split(':')[1];
          console.log(iterationId);
            dispatch(addStoryAction(Number.parseInt(iterationId), values['title0'],values['startDate0'],values['expireDate0']))
        }
    }
}

const ShowIteration = connect(
    mapStateIterations,
    mapDispatchTodoProps,
)(ShowIterations)


export default ShowIteration