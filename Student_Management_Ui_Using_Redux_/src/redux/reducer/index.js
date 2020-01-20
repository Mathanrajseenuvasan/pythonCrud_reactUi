import { combineReducers } from 'redux'
import StudentReducer from './User/StudentReducer'

const appReducer = combineReducers({
    StudentReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;