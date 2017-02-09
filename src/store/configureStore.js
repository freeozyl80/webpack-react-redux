import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'


export default function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(
      thunk
    )
  )
}