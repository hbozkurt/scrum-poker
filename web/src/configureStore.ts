import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  initialState: () => ({})
});

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default configureStore;