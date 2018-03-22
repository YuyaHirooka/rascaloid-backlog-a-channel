import {
    ADD_NEW_ITERATION,
} from "../action/actions";

function addIterations(state = [], action) {
    switch (action.type) {
        case ADD_NEW_ITERATION:
            return [
                ...state,
                {
                    projectId:1,
                    id: action.id,
                    title: action.title,
                    startDate: action.startDate,
                    expireDate: action.expireDate,
                }
            ]
        default:
            return state
    }
}





export default addIterations