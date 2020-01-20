import {combineReducers} from 'redux';
import errorReducer from './Error/errorReducer';

const appReducer =combineReducers({
    errorReducer
});

const rootReducer = (state,action) =>{
    return appReducer (state,action)
}



export default rootReducer;