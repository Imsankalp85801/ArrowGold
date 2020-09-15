import * as actions from '../../utils/Actions';
import { notUndefinedAndNull, undefinedOrNull, undefinedOrZero } from '../../utils/Validation';
import _ from 'lodash';


const initialState = {
    cartStatus:"",
    addToCartStatus:false,
    showLoader: false,
    summaryCart:[]

};

export default function cartReducer(state = initialState, action) {

    if (typeof state === 'undefined') {
        return state;
    }

    switch (action.type) {
        
        
        case actions.RESET_CART_DATA:
            return {
                ...state,
                summaryCart:[]
            }
        case actions.RESET_CART_STATUS:
            return {
                ...state,
                addToCartStatus:false,
            }            
                    
            
        case actions.pending(actions.GET_SUMMARY):
            return {
                ...state,
                showLoader: true,
            }

        case actions.fulfilled(actions.GET_SUMMARY):
            return {
                ...state,
                showLoader: false,
                summaryCart:action.payload.data.data
                
            }

        case actions.rejected(actions.GET_SUMMARY):
            return {
                ...state,
                showLoader: false,
            }

        case actions.pending(actions.REMOVE_ITEM):
            return {
                ...state,
                showLoader: true
            }


        case actions.fulfilled(actions.REMOVE_ITEM):         
            let index = action.meta.index;
            console.log("FUL",action.payload.data)
            let tempCartItems = _.cloneDeep(state.summaryCart);
            if (index !== -1 && action.payload.data.data && action.payload.data.status) {
                tempCartItems.splice(index, 1);
            }

            return {
                ...state,
                showLoader: false,
                summaryCart: tempCartItems           
                
            }
        

        case actions.rejected(actions.REMOVE_ITEM):
            console.log("rej",action.payload.data)

            return {
                ...state,
                showLoader: false,
            }

     

        default:
            return {...state}
            

    }

    
}