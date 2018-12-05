import {MENU_DATA,REC_DATA} from '../constant';

export function menuDataAction(data){
    console.log(data,'menu')
    return {
        type:MENU_DATA,
        data
    }
};

export function recDataAction(data){
    console.log(data)
    return {
        type:REC_DATA,
        data
    }
};


