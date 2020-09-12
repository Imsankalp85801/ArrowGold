import * as actions from '../../utils/Actions';
import { notUndefinedAndNull, undefinedOrZero } from '../../utils/Validation';


const initialState = {
    showLoader: false,
    menuDetails:null,
    categoryDetails:null,
    productListing:null,
    productDetails:null,
    addToCart:null,
    summaryCart:[]
};

export default function HomeReducer(state = initialState, action) {

    if (typeof state === 'undefined') {
        return state;
    }

    switch (action.type) {
        
        case actions.RESET_HOME_DATA:
            return {
                ...state,
                menuDetails:null,
                categoryDetails:null,
                productListing:null,
                productDetails:null,
                addToCart:null
            }
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
            
        case actions.pending(actions.GET_PRODUCT_LISTING):
        
            return {
                ...state,
                showLoader: true
            }

        case actions.fulfilled(actions.GET_PRODUCT_LISTING):
            let pData=action.payload.data.data
            let productListingData=notUndefinedAndNull(pData.result) && 
            !undefinedOrZero(pData.result.product) ?pData: null
            return {
                ...state,
                showLoader: false,
                productListing: productListingData
                
            }

        case actions.rejected(actions.GET_PRODUCT_LISTING):
            return {
                ...state,
                showLoader: false,
            }

        case actions.pending(actions.GET_PRODUCT_DETAILS):
            return {
                ...state,
                showLoader: true,
                productDetails:null
            }

        case actions.fulfilled(actions.GET_PRODUCT_DETAILS):
            let detailData=action.payload.data.data
            let productDetailsData=notUndefinedAndNull(detailData) && 
            notUndefinedAndNull(detailData.product) ? detailData: null
            return {
                ...state,
                showLoader: false,
                productDetails: productDetailsData
                
            }

        case actions.rejected(actions.GET_PRODUCT_DETAILS):

            return {
                ...state,
                showLoader: false,
            }
        

        case actions.pending(actions.ADD_TO_CART):
            return {
                ...state,
                showLoader: true,
            }

        case actions.fulfilled(actions.ADD_TO_CART):
            return {
                ...state,
                showLoader: false,
                addToCart:action.payload.data
                
            }

        case actions.rejected(actions.ADD_TO_CART):

            return {
                ...state,
                showLoader: false,
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
        
        default:
            return {...state}
    }
}