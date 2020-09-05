import moment from 'moment';
import { empty } from './Validation';
import * as mime from 'react-native-mime-types';




export function getDate(date, format, displayFormat){

    if(empty(date)){
        return null;
    }

    if(!empty(format)){
        date = moment(date,format);
    }else{
        date = moment(date,"DD/MM/YYYY");
    }

    if(!empty(displayFormat)){
        date = date.format(displayFormat)
    }else{
        date = date.format("DD MMM, YYYY");
    }


    return date;
}

export function formatBytes(bytes, decimals, symbol) {
    if(bytes == 0) return '0 Bytes';
    var k = 1024,
        dm = decimals <= 0 ? 0 : decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    let size = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    if(symbol){
        return size + ' ' + sizes[i];
    }

    return size;
 }


 
 export function getFileType(fileName){
    let ext = fileName.split('.').pop().toLowerCase();

    return mime.lookup(ext);

}