import * as actions from '../action/LoginAction';

const initialState = {
    showLoader: false,
    loginDetails: [],
    status: false
};

export default function loginReducer(state = initialState, action) {

    if (typeof state === 'undefined') {
        return state;
    }

    switch (action.type) {

    
        case actions.pending(actions.LOGIN):
            
            return {
                ...state,
                showLoader: true
            }

        case actions.fulfilled(actions.LOGIN):
           
                  
            return {
                ...state,
                showLoader: false,
                status:  action.payload.data.success,
                loginDetails: action.payload.data
                
            }

        case actions.rejected(actions.LOGIN):
            return {
                ...state,
                showLoader: false,
            }

        default:
            return {...state}
    }
}