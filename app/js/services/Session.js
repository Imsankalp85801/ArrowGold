import { AsyncStorage } from "react-native";
import { empty } from "../utils/Validation";
let SESSION_KEY = "agsession";
let WELCOME_SCREEN_KEY = "welcome_screen";

/**
 * Session is returned in a promis and can be accessed by chaning then function
 *
 * @export
 * @returns
 */
export async function getSession(){
    try{
        let session = await AsyncStorage.getItem(SESSION_KEY);
        return JSON.parse(session);
    }catch(e){
        return null;
    }
}




/**
 * Creates the session with the user id and token
 *
 * @export
 * @param {*} session
 */
export async function createSession(session){
    await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(session));
}
export async function clearSession(){
    await AsyncStorage.removeItem(SESSION_KEY);
}

export async function getToken(){
    let session = await getSession();
      if (!empty(session)) {
          return session.token;
      }
  }