import * as actions from '../../utils/Actions';
import { notUndefinedAndNull, undefinedOrZero } from '../../utils/Validation';


const initialState = {
    showLoader: false,
    menuDetails:null,
    categoryDetails:null
};

export default function HomeReducer(state = initialState, action) {

    if (typeof state === 'undefined') {
        return state;
    }

    switch (action.type) {
    
        case actions.pending(actions.MENU):
            
            return {
                ...state,
                showLoader: true
            }

        case actions.fulfilled(actions.MENU):
            let data=action.payload.data
            let menuData=notUndefinedAndNull(data.data) && 
            !undefinedOrZero(data.data.result) ? data.data: null
            return {
                ...state,
                showLoader: false,
                menuDetails: menuData
                
            }

        case actions.rejected(actions.MENU):
            return {
                ...state,
                showLoader: false,
            }

        case actions.pending(actions.GET_CATEGORY_BY_ID):
            
            return {
                ...state,
                showLoader: true
            }

        case actions.fulfilled(actions.GET_CATEGORY_BY_ID):
            let categoryData=notUndefinedAndNull(action.payload.data.data) && 
            !undefinedOrZero(action.payload.data.data.result) ?action.payload.data.data: null
            return {
                ...state,
                showLoader: false,
                categoryDetails: categoryData
                
            }

        case actions.rejected(actions.GET_CATEGORY_BY_ID):
            return {
                ...state,
                showLoader: false,
            }
            

        default:
            return {...state}
    }
}