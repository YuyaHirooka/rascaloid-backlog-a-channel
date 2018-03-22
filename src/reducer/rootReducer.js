import {reducer as reduxFormReducer} from 'redux-form';
import {combineReducers} from "redux"
import AddIterationReducer from './AddIterationReducer'

const reducer = combineReducers({
    form:reduxFormReducer,
    AddIterationReducer,

})

export default reducer