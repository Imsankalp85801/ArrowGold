export let ROLE_PARENT = "PARENT";
export let ROLE_STUDENT = "STUDENT";
export let ROLE_TEACHER = "TEACHER";



export function isMenuConfigured(stateUrl, menus){

    let isConfigured = false;
    for(let i=0;i<menus.length;i++){
        let menu = menus[i];

        if(menu.stateUrl === stateUrl){
            isConfigured = true;
            break;
        }
    }

    return isConfigured;
}