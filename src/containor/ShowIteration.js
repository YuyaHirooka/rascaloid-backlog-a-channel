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
            dispatch(addStoryAction(0, values,values,values))
        }
    }
}

const ShowIteration = connect(
    mapStateIterations,
    mapDispatchTodoProps,
)(ShowIterations)


export default ShowIteration