import axios from 'axios';


export function request(baseUrl){
    
    let request = axios.create({
        baseURL: baseUrl,
    });

    return request;
}
