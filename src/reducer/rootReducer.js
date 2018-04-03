import {reducer as reduxFormReducer} from 'redux-form';
import {combineReducers} from "redux"
import iterations from './AddItarationReducer'

const reducer = combineReducers({
    form:reduxFormReducer,
    iterations,
})

export default reducer