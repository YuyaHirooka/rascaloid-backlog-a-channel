import {ADD_ITERATION, ADD_STORY, SORT_STORY} from '../action/actions'


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
        if (iteration.iterationId === action.iterationId) {
          return Object.assign({}, iteration, {
            story: [
              ...iteration.story,
              {
                title: action.title + " " + action.startDate +
                " " + action.expireDate,
                ida: action.id,
              }
            ]
          });
        }
        return iteration;
      })
    case SORT_STORY:
      return state.map((iteration) => {
        if (iteration.iterationId === action.iterationId) {
          return Object.assign({}, iteration, {
            story: action.sortedStory
          })
        }
        return iteration
      })
    default:
      return state
  }
}

export default iterations