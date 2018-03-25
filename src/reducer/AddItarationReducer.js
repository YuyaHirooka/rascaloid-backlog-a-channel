import {ADD_ITERATION,ADD_STORY,SORT_STORY} from '../action/actions'


function iterations(state = [], action) {
    switch (action.type) {
        case ADD_ITERATION:
            return [
                ...state,
                {
                    iterationId: action.iterationId,
                    iterationTitle: action.iterationTitle,
                    story: [],
                }]
        case ADD_STORY:
            return state.map((iteration) => {
                if (iteration === action.iterationId) {
                    return Object.assign({}, state, {
                        iterationId: iteration.iterationId,
                        iterationTitle: iteration.iterationTitle,
                        story: [
                            ...iteration.story,
                            {
                                title: action.title + " " + action.startDate +
                                " " + action.expireDate,
                                ida: action.id,}]
                    })
                }
            })
        case SORT_STORY:
            return Object.assign({}, state, {
                projectId: state.projectId,
                story: action.sortedStory,
            })

        default:
            return state
    }
}

export default iterations