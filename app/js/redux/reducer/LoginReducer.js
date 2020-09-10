import * as actions from '../../utils/Actions';


const initialState = {
    showLoader: false,
    userDetails: null,
    loginStatus: false,
    loggedOut:false
};

export default function loginReducer(state = initialState, action) {

    if (typeof state === 'undefined') {
        return state;
    }

    switch (action.type) {


        case actions.LOGOUT:
            return {
                ...state,           
                loginStatus: false,
                loggedOut: true,
                userDetails: null,
            }
    
        case actions.pending(actions.LOGIN):
            
            return {
                ...state,
                showLoader: true
            }

        case actions.fulfilled(actions.LOGIN):
            return {
                ...state,
                showLoader: false,
                loginStatus:  action.payload.data.status,
                userDetails: action.payload.data
                
            }

        case actions.rejected(actions.LOGIN):
            return {
                ...state,
                showLoader: false,
                loginStatus:false
            }

        default:
            return {...state}
    }
}