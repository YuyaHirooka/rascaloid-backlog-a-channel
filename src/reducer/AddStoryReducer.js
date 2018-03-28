import {
  ADD_STORY,
  SORT_STORY
} from "../action/actions";

function stories(state = []
    , action) {

  switch (action.type) {
    case ADD_STORY:
      return state.map((iteration) => {
        if (iteration.iterationId === action.iterationId) {
          return Object.assign({}, stories, {
            iterationId: state.iterationId,
            iterationTitle: state.iterationTitle,
            story: [
              ...iteration.story,
              {
                title: action.title + " " + action.startDate +
                " " + action.expireDate,
                ida: action.id,
              }]
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


export default stories