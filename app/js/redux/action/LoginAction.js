import * as action from "../../utils/Actions";
import { request } from "../../services/Request";
import * as url from "../../utils/Url";

export function login(data) {
  return async (dispatch)=>{
    let http = await request(url.URL);
    dispatch({
      type: action.LOGIN,
      payload: http.post("/login",data,{
        headers: {
            'Content-Type': 'multipart/form-data',
            }
        })
    }).catch(response => {});
  }
}


export function logout(){
  return (dispatch) =>
    dispatch({
      type: action.LOGOUT
    })
}