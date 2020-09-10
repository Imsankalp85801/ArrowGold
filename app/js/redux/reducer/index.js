import {combineReducers} from 'redux'
import login from './LoginReducer';
import { LOGOUT } from '../../utils/Actions';
import home from './HomeReducer';


const appReducer = combineReducers({
    login,
    home
});

const reducer = (state, action) => {
    if(action.type === LOGOUT){
        state = undefined;
    }

    return appReducer(state, action);
}
export default reducer;