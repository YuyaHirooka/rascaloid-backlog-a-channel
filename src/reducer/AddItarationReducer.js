import {ADD_ITERATION} from '../action/actions'


function iterations(state=[],action) {
    switch (action.type) {
        case ADD_ITERATION:
            return [
                ...state,
                iterationTitle:action.title

            ]

        default:
            return state
    }
}

export default iterations