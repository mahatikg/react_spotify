import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import compareReducer from './compare_reducer'

const rootReducer = combineReducers({
  users: usersReducer,
  comparedUsers: compareReducer
})

export default rootReducer
