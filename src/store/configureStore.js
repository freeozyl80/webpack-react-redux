import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

// When this middleware is enabled, if you dispatch a function,
// Redux Thunk middleware will give it  dispatch as an argument.
// It will also “swallow” such actions so don’t worry about your reducers receiving weird function arguments.
// Your reducers will only receive plain object actions—either emitted directly, or emitted by the functions as we just described.
export default function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(
      thunk
    )
  )
}