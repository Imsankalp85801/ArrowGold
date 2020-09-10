import axios from 'axios';
import { empty, notUndefinedAndNull, undefinedOrNull } from '../utils/Validation';
import { getToken } from './Session';


export async function request(baseUrl){

    let request = axios.create({
        baseURL: baseUrl,
        timeout: 90000, //Default timeout 90 Secs
    });


    let token = await getToken();
    if (notUndefinedAndNull(token)) {
        request.defaults.headers.common['Authorization'] = 'Bearer '+token;
        request.defaults.headers.common['token'] ='Bearer '+ token;
        request.defaults.headers.common['Content-Type'] = 'application/json';
    }

    return request;
}
