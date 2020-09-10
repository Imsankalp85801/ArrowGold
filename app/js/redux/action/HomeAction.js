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