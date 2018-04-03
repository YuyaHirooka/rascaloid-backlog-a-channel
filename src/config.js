import {createStore} from 'redux'
import {applyMiddleware} from 'redux'
import thunkMiddle from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './reducer/rootReducer'

const loggerMiddleware = createLogger()

export default function config(preLoadedState) {
  return createStore(
      rootReducer,
      preLoadedState,
      applyMiddleware(
          thunkMiddle,
          loggerMiddleware,
      ),
  )
}

