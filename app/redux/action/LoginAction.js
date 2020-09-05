import * as action from "../../util/Constant";
import { request } from "../../services/Request";


export function login(limit) {
  
  return (dispatch) =>
    dispatch({
      type: action.LOGIN,
      payload: request("https://standalonetest.eduqfix.com").get("/index.php/rest/V1/marketplace/getSellerDetails",{
        params :{
          "limit":limit
        }
  })
    }).catch(response => {});
}
