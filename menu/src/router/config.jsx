
import Main from '../pages/main';
import Msg from '../pages/Msg'


export default {
    mode:'history',
    routes:[
        {
            name:'main',
            path:'/',
            component:Main
        },{
            name:'msg',
            path:'/msg',
            component:Msg
        }
    ]
}