export const AUTH_REQUEST='AUTH_REQUEST'
export const LOGOUT='LOGOUT'
export const SET_TOKEN='SET_TOKEN'

export const login=()=>{
    return {
        type:AUTH_REQUEST
    }
}

export const setToken=(token)=>{
    return {
        type:SET_TOKEN,
        payload:token
    }

}

export const logout=()=>{
    return {
        type:LOGOUT
    }
}

