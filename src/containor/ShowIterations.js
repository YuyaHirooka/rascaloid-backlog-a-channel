import {connect} from 'react-redux'
//import Iterations from "../component/Iteration"
 import ShowIterationsWithTree from "../component/ShowIterationsWithTree"

// todo:add taggle


const getIterations=iterations=>{
    //todo: return でプロジェクトを取りに行くようにする
    return iterations
}

const mapStateItarations=state=>{
    return{
        iterations:getIterations(state.AddIterationReducer)
    }
}

const editorControl=dispatch=>{
    return{
        onClickIteration:iterationId=>{
            //todo:クリックで編集が行えるようにする。
            dispatch()
        }
    }
}

const ShowIterations=connect(
    mapStateItarations,
    editorControl,
)(ShowIterationsWithTree)

export default ShowIterations