import {connect} from 'react-redux'
//import Iterations from "../component/Iteration"
 import ShowIterationsWithTree from "../component/ShowIterationsWithTree"
import {sortStory} from '../action/actions'

// todo:add taggle


const getIterations=iterations=>{
    //todo: return でプロジェクトを取りに行くようにする
    return iterations
}

const mapStateItarations=state=>{
    return{
        stories:getIterations(state.stories)
    }
}

const mapDispatchTodoProps=dispatch=>{
    return{
        onChangeHandle:sortedStory=>{
            console.log('sorted')
            console.log(sortedStory)
            dispatch(sortStory(sortedStory))
        }
    }
}

const ShowIterations=connect(
    mapStateItarations,
    mapDispatchTodoProps,
)(ShowIterationsWithTree)


export default ShowIterations