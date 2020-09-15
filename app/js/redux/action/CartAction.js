import * as action from "../../utils/Actions";
import { request, asyncRequest } from "../../services/Request";
import * as url from "../../utils/Url";
import { notUndefinedAndNull, empty } from "../../utils/Validation";


export function getSummaryOfCart(token) {
  return async (dispatch)=>{
    let http = await request(url.URL);
    dispatch({
      type: action.GET_SUMMARY,
      payload: http.post(`/cart-summary`,null,{
        headers: {
            'Authorization': 'Bearer'+" "+token,
            }
        })
    }).catch(response => {});
  }
}

export function removeItem(body,token,index) {  
  console.log("SSSS")
    return async (dispatch) => {
        let http = await request(url.URL);
        dispatch({
        type: action.REMOVE_ITEM,
        meta: {index: index},
        payload: http.post(`/delete-cart-product`,body,{
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer'+" "+token,
            }
        })
        }).catch(response => {});
    }
}

export function decreaseQuantity(data,productIndex) {  
    return async (dispatch) => {
        let http = await request(url.SHOPPING_SERVICE);
        dispatch({
        type: action.DECREASE_QUANTITY,
        meta: {quantityIndex: productIndex},
        payload: http.post("/index.php/rest/V1/customapi/decreseProductInCart",data)
        }).catch(response => {});
    }
}


export function getCartItems(body){
    return async (dispatch) => {
        let http = await request(url.SHOPPING_SERVICE);
        dispatch({
        type: action.GET_CART_ITEMS,
        payload: http.post("/index.php/rest/V1/customapi/getProductInCart", body)
      })
    }
}

export function getCartId(body,adminToken) {  
  return async (dispatch) =>{  
    let http = await request(url.SHOPPING_SERVICE);
    dispatch({
      type: action.GET_CARTID,
      payload: http.post("/index.php/rest/V1/carts/mine", body,{
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+adminToken
              }
          })
    }).catch(response => {});
  } 
} 

export function addToCart(body,adminToken) {
    return async (dispatch) => {
        let http = await request(url.SHOPPING_SERVICE);
        dispatch({
        type: action.ADD_TO_CART,
        payload: http.post("/index.php/rest/V1/carts/mine/items", body,{
          headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+adminToken
          }
      })
        }).catch(response => {});
    }
}

export function resetCartStatusValue(){
  return (dispatch)=>
  dispatch({
    type: action.RESET_CART_STATUS,
  });
}

export function resetCartData(){
  return (dispatch)=>
  dispatch({
    type: action.RESET_CART_DATA,
  });
}

    
    
  
