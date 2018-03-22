import {reducer as reduxFormReducer} from 'redux-form';
import {combineReducers} from "redux"
import stories from './AddStoryReducer'
import iterations from './AddItarationReducer'

const reducer = combineReducers({
    form:reduxFormReducer,
    stories,
    iterations,
})

export default reducer