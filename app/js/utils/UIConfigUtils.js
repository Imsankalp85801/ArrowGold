import { emptyOrZero } from "./Validation";

export function getConfig(identifier, configs){
    if(emptyOrZero(configs)){
        return null;
    }

    for(let i=0;i<configs.length;i++){
        let config = configs[i];
        if(config.identifier === identifier){
            return config;
        }
    }

}