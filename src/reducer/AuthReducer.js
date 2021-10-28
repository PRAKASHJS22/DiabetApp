import {
    AUTH_REQUEST,
    LOGOUT,
    SET_TOKEN
} from '../action/authAction'


const intialState={
    logined:false,
    token:''
}
const AuthReducer=(state=intialState,action)=>{
    switch(action.type){
        case AUTH_REQUEST:
            return {logined:true}
        case SET_TOKEN:
          return {...state,token:action.payload,logined:true}
        case LOGOUT:
            return intialState   
        default:
            return state    
    }
}

export default AuthReducer
