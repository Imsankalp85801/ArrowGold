import { empty } from '../utils/Validation';
import {SHOPPING_SERVICE} from '../utils/Url';

export function getProductsImage(path){
    let pathValue = `${SHOPPING_SERVICE}/pub/media/catalog/product/`
    if(!empty(path)){
        pathValue = pathValue+path;
    }
    return pathValue;
}

export function getCategoriesImage(path){
    let pathValue = `${SHOPPING_SERVICE}/pub/media/catalog/category/`
    if(!empty(path)){
        pathValue = pathValue+path;
    }
    return pathValue;
}

