import {
    ADD_NEW_ITERATION,
    SORT_STORY
} from "../action/actions";

function addIterations(state = {
    story: [],
}, action) {
    switch (action.type) {
        case ADD_NEW_ITERATION:
            return Object.assign({}, state, {
                projectId: 1,
                story: [
                    ...state.story,
                    {
                        title: action.title + " " + action.startDate +
                        " " + action.expireDate,
                        ida: action.id,
                    }]
            })
        case SORT_STORY:

            return Object.assign({},state,{
                projectId:state.projectId,
                story:action.sortedStory,
            })

        default:
            return state
    }
}


export default addIterations