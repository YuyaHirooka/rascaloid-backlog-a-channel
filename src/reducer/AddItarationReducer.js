import {ADD_ITERATION, ADD_STORY, SORT_STORY} from '../action/actions'


function iterations(state = [], action) {
  console.log("aaaaaaaaaaaaaaaa")
  console.log(state)
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
        console.log(iteration);
        console.log(action);
        if (iteration.iterationId === action.iterationId) {
          return Object.assign({}, iteration, {
            story:[
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
      return Object.assign({}, state, {
        projectId: state.projectId,
        story: action.sortedStory,
      })

    default:
      return state
  }
}

export default iterations