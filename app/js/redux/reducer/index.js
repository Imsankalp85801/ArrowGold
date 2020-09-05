import {combineReducers} from 'redux'
import login from './LoginReducer';
   
const appReducer = combineReducers({
    login
});

const reducer = (state, action) => {
    
    return appReducer(state, action);
}


export default reducer;