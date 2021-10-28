import { combineReducers } from "redux";
import AuthReducer from './AuthReducer'


const appReducer= combineReducers({
    authReducer:AuthReducer
})

export default appReducer