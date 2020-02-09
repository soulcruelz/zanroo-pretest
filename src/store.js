import { createStore } from 'redux'
import {
    fromJS,
    Map,
} from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from '~/reducer'

const defaultState = fromJS({})

export default (initialState = defaultState) => {
  if (!Map.isMap(initialState)) {
    initialState = fromJS(initialState)
  }

  const configuredStore = createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
  )

  return configuredStore
}
