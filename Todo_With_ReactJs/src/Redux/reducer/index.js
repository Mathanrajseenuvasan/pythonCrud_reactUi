import {combineReducers} from 'redux';
import employeeReducers from './Employee/employeeReducer';

const appReducer =combineReducers({
    employeeReducers
});

const rootReducer = (state,action) =>{
    return appReducer (state,action)
}



export default rootReducer;