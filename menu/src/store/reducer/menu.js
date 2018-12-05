import {MENU_DATA,REC_DATA} from '../constant'

import {handleActions} from 'redux-actions';

export const menudata = handleActions ({
    [MENU_DATA] : (state,actions)=>{
        
        return 
    }
},[])

export const recdata = handleActions ({
    [REC_DATA] : (state,actions)=>([...actions.data])
},[])
