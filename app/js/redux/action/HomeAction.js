import * as action from "../../utils/Actions";
import { request } from "../../services/Request";
import * as url from "../../utils/Url";

export function getMenu() {
  return async (dispatch)=>{
    let http = await request(url.URL);
    dispatch({
      type: action.MENU,
      payload: http.get("/menu")
    }).catch(response => {});
  }
}

export function getCategorybyId(id) {
  return async (dispatch)=>{
    let http = await request(url.URL);
    dispatch({
      type: action.GET_CATEGORY_BY_ID,
      payload: http.get(`/category/${id}`)
    }).catch(response => {});
  }
}

export function getProductListing(productId) {
  return async (dispatch)=>{
    let http = await request(url.URL);
    dispatch({
      type: action.GET_PRODUCT_LISTING,
      payload: http.post(`/product-listing/${productId}`)
    }).catch(response => {});
  }
}

export function getProductDetails(productId,token) {
  return async (dispatch)=>{
    let http = await request(url.URL);
    dispatch({
      type: action.GET_PRODUCT_DETAILS,
      payload: http.get(`/product/${productId}`,{
        headers: {
            'Authorization': 'Bearer'+" "+token,
            }
        })
    }).catch(response => {});
  }
}

export function addToCart(body,token) {
  return async (dispatch)=>{
    let http = await request(url.URL);
    dispatch({
      type: action.ADD_TO_CART,
      payload: http.post(`/cart`,body,{
        headers: {
            'Authorization': 'Bearer'+" "+token,
            }
        })
    }).catch(response => {});
  }
}

export function getSummaryOfCart(token) {
  console.log(token)
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

export function resethomeData(){
  return (dispatch)=>
  dispatch({
      type: action.RESET_HOME_DATA,
  });
}